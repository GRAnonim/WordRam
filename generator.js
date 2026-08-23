import { ENGLISH_WORDS, LETTER_FREQ } from './english.js';
import { difficultyForLevel } from './data.js';

export class RNG {
  constructor(seed) { this.seed = (seed >>> 0) || 0x9e3779b9; }
  next() { let t = this.seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }
  int(min, max) { return Math.floor(this.next() * (max - min + 1)) + min; }
  pick(arr) { return arr[Math.floor(this.next() * arr.length)]; }
  shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(this.next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
}

export function hashSeed(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function key(r,c) { return `${r}:${c}`; }
function neighbors(r,c,rows,cols) {
  const out = [];
  if (r > 0) out.push([r-1,c]);
  if (r < rows-1) out.push([r+1,c]);
  if (c > 0) out.push([r,c-1]);
  if (c < cols-1) out.push([r,c+1]);
  return out;
}

function boardMatchesWord(board, word, path) {
  if (path.length !== word.length) return false;
  const forward = path.every(([r,c],i) => !board[r][c] || board[r][c] === word[i]);
  if (forward) return true;
  return path.every(([r,c],i) => !board[r][c] || board[r][c] === word[word.length - 1 - i]);
}

function findCandidatePaths(board, word, rng, limit=100) {
  const rows = board.length, cols = board[0].length;
  const candidates = [];
  const variants = [word, word.split('').reverse().join('')];
  const cells = rng.shuffle([...Array(rows*cols)].map((_,i)=>[Math.floor(i/cols), i%cols]));
  const seen = new Set();

  function dfs(r, c, variant, index, path, used) {
    if (candidates.length >= limit) return;
    const letter = variant[index];
    if (board[r][c] && board[r][c] !== letter) return;
    const k = `${r}:${c}`;
    if (used.has(k)) return;
    used.add(k); path.push([r,c]);
    if (index === variant.length - 1) {
      const sig = path.map(([rr,cc])=>`${rr}:${cc}`).join('|');
      if (!seen.has(sig)) { seen.add(sig); candidates.push(path.slice()); }
    } else {
      const ns = rng.shuffle(neighbors(r,c,rows,cols));
      for (const [nr,nc] of ns) {
        if (candidates.length >= limit) break;
        dfs(nr,nc,variant,index+1,path,used);
      }
    }
    path.pop(); used.delete(k);
  }

  for (const variant of variants) {
    for (const [r,c] of cells) {
      if (candidates.length >= limit) break;
      if (board[r][c] && board[r][c] !== variant[0]) continue;
      dfs(r,c,variant,0,[],new Set());
    }
    if (candidates.length >= limit) break;
  }
  return candidates;
}

function scorePath(board, word, path) {
  let overlap = 0, empty = 0, bends = 0;
  for (let i=0;i<path.length;i++) {
    const [r,c] = path[i];
    if (board[r][c]) overlap++;
    else empty++;
    if (i > 1) {
      const [pr,pc] = path[i-1], [ppr,ppc] = path[i-2];
      if ((pr===ppr) !== (r===pr)) bends++;
      if ((pc===ppc) !== (c===pc)) bends++;
    }
  }
  const straightBonus = bends === 0 ? 0.5 : 0;
  return overlap*5 - empty*0.6 + bends*0.7 + straightBonus + (word.length>=6?0.4:0);
}

function chooseWords(rng, levelNumber, profile) {
  const pool = ENGLISH_WORDS.filter(w => w.length >= profile.minLen && w.length <= profile.maxLen && /^[A-Z]+$/.test(w));
  const shuffled = rng.shuffle(pool);
  const result = [];
  const seen = new Set();
  // Prefer more interesting long words as levels advance.
  const sorted = shuffled.sort((a,b) => {
    const la = a.length + rng.next()*2 + (/[JQXZ]/.test(a)?1:0);
    const lb = b.length + rng.next()*2 + (/[JQXZ]/.test(b)?1:0);
    return lb - la;
  });
  for (const w of sorted) {
    if (seen.has(w)) continue;
    if (result.some(x => shareManyLetters(x,w) > Math.min(x.length,w.length)-2)) continue;
    result.push(w); seen.add(w);
    if (result.length >= profile.targetCount) break;
  }
  return result;
}

function shareManyLetters(a,b){
  const ca = new Set(a); let n=0; for(const ch of b) if(ca.has(ch)) n++; return n;
}

function fillBoard(board, rng, profile) {
  const rows = board.length, cols = board[0].length;
  const freq = LETTER_FREQ;
  const letters = Object.keys(freq);
  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) {
    if (board[r][c]) continue;
    let pick = 'E';
    let bestPenalty = Infinity;
    for (let tries=0; tries<6; tries++) {
      let sum = letters.reduce((a,l)=>a+freq[l],0);
      let roll = rng.next()*sum;
      for (const l of letters){ roll -= freq[l]; if(roll<=0){ pick=l; break; } }
      // Penalize making very common 3-letter words along simple straight runs.
      let penalty = 0;
      for (const [dr,dc] of [[0,1],[1,0]]) {
        const line = [];
        for (let k=-2;k<=2;k++) { const rr=r+dr*k, cc=c+dc*k; if(rr>=0&&rr<rows&&cc>=0&&cc<cols) line.push(board[rr][cc]||''); }
        if(line.join('').includes(pick+'A') || line.join('').includes(pick+'E')) penalty += 1;
      }
      if (penalty < bestPenalty) { bestPenalty = penalty; }
    }
    board[r][c]=pick;
  }
  return board;
}

function buildTrie(words) {
  const root = { next: Object.create(null), word: null };
  for (const w of words) { let node=root; for(const ch of w){ node=node.next[ch] ||= { next:Object.create(null), word:null }; } node.word=w; }
  return root;
}

function scanBonusWords(board, dictionary, minLen, maxLen, limit=12) {
  const trie = buildTrie(dictionary.filter(w=>w.length>=minLen&&w.length<=maxLen));
  const rows=board.length, cols=board[0].length;
  const results = new Set();
  const found = [];
  function dfs(r,c,node,used,word){
    const ch=board[r][c], child=node.next[ch]; if(!child) return;
    const nextWord=word+ch; const k=`${r}:${c}`; used.add(k);
    if(nextWord.length>=minLen && child.word && !results.has(nextWord)){ results.add(nextWord); found.push(nextWord); if(found.length>=limit){ used.delete(k); return; } }
    if(nextWord.length<maxLen){
      for(const [nr,nc] of neighbors(r,c,rows,cols)){ const nk=`${nr}:${nc}`; if(!used.has(nk)) dfs(nr,nc,child,used,nextWord); if(found.length>=limit) break; }
    }
    used.delete(k);
  }
  for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){ dfs(r,c,trie,new Set(),''); if(found.length>=limit) return found; }
  return found;
}

export function validateLevel(level) {
  const errors=[]; const board=level.board; const rows=level.rows, cols=level.cols;
  for (const item of level.targets) {
    if (!item.path || item.path.length !== item.word.length) errors.push(`${item.word}: wrong path length`);
    for(let i=1;i<item.path.length;i++){
      const [r,c]=item.path[i-1], [nr,nc]=item.path[i];
      if(Math.abs(r-nr)+Math.abs(c-nc)!==1) errors.push(`${item.word}: non-adjacent step`);
      if(r<0||r>=rows||c<0||c>=cols||nr<0||nr>=rows||nc<0||nc>=cols) errors.push(`${item.word}: out of bounds`);
    }
    const formed=item.path.map(([r,c])=>board[r][c]).join('');
    if(formed!==item.word && formed!==item.word.split('').reverse().join('')) errors.push(`${item.word}: board/path mismatch`);
    const unique=new Set(item.path.map(([r,c])=>`${r}:${c}`));
    if(unique.size!==item.path.length) errors.push(`${item.word}: repeated cell`);
  }
  return { ok: errors.length===0, errors };
}

export function generateLevel(levelNumber, mode='campaign') {
  const profile=difficultyForLevel(levelNumber);
  const seed=hashSeed(`wordra:${mode}:${levelNumber}`);
  const rng=new RNG(seed);
  let best=null;
  for(let attempt=0;attempt<100;attempt++){
    const board=Array.from({length:profile.rows},()=>Array(profile.cols).fill(''));
    const words=chooseWords(rng,levelNumber,profile);
    if(words.length<Math.max(3,profile.targetCount-2)) continue;
    const targets=[];
    let failed=false;
    const ordered=words.slice().sort((a,b)=>b.length-a.length);
    for(let wi=0;wi<ordered.length;wi++){
      const w=ordered[wi];
      const candidates=findCandidatePaths(board,w,rng,120);
      if(!candidates.length){ failed=true; break; }
      candidates.sort((a,b)=>scorePath(board,w,b)-scorePath(board,w,a));
      const top=candidates.slice(0,Math.min(18,candidates.length));
      const path=rng.pick(top);
      const forward = path.every(([r,c],i) => !board[r][c] || board[r][c]===w[i]);
      const variant = forward ? w : w.split('').reverse().join('');
      for(let i=0;i<path.length;i++){
        const [r,c]=path[i];
        if(!board[r][c]) board[r][c]=variant[i];
      }
      targets.push({word:w,path,reverse:variant!==w});
    }
    if(failed) continue;
    fillBoard(board,rng,profile);
    const level={ id:levelNumber, mode, rows:profile.rows, cols:profile.cols, board, targets, seed, bonus:[] };
    const validation=validateLevel(level);
    if(!validation.ok) continue;
    const dictionaryBonus=ENGLISH_WORDS.filter(w=>w.length>=3 && w!=='' && !targets.some(t=>t.word===w));
    level.bonus=scanBonusWords(board,dictionaryBonus,3,Math.min(7,profile.maxLen),12);
    level.difficulty=Math.round(1 + (levelNumber/1000)*8 + (targets.length/10)*1.2 + (level.bonus.length<3?1:0));
    level.chapter=levelNumber<51?'Beginnings':levelNumber<151?'Momentum':levelNumber<301?'Focus':levelNumber<501?'Flow':levelNumber<751?'Mastery':'Wordra';
    best=level; break;
  }
  if(!best) throw new Error(`Could not generate level ${levelNumber}`);
  return best;
}
