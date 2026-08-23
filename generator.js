import {WORDS,COMMON_BONUS} from "./data.js";

const DIRS=[[1,0],[-1,0],[0,1],[0,-1]];

export function neighbors(r,c,size){
  return DIRS.map(([dr,dc])=>[r+dr,c+dc]).filter(([nr,nc])=>nr>=0&&nr<size&&nc>=0&&nc<size);
}

function key(r,c){return r+","+c}

export function findPaths(board, word){
  const n=board.length, out=[];
  function dfs(r,c,i,path,used){
    if(board[r][c]!==word[i]) return;
    const k=key(r,c);
    if(used.has(k)) return;
    const next=path.concat([[r,c]]);
    if(i===word.length-1){out.push(next);return}
    used.add(k);
    for(const [nr,nc] of neighbors(r,c,n)) dfs(nr,nc,i+1,next,used);
    used.delete(k);
  }
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)dfs(r,c,0,[],new Set());
  return out;
}

export function canTrace(board,word){return findPaths(board,word).length>0}

function empty(n){return Array.from({length:n},()=>Array(n).fill(""))}

function placeWord(board,word,r,c,dr,dc){
  const n=board.length, path=[];
  for(let i=0;i<word.length;i++){
    const rr=r+dr*i, cc=c+dc*i;
    if(rr<0||rr>=n||cc<0||cc>=n)return null;
    if(board[rr][cc] && board[rr][cc]!==word[i])return null;
    path.push([rr,cc]);
  }
  path.forEach(([rr,cc],i)=>board[rr][cc]=word[i]);
  return path;
}

function candidates(board,word){
  const n=board.length, arr=[];
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)for(const [dr,dc] of DIRS){
    const path=placeWord(board,word,r,c,dr,dc);
    if(path){ path.forEach(([rr,cc])=>board[rr][cc]=""); arr.push([r,c,dr,dc,path]); }
  }
  return arr;
}

function randomize(a,rng){for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function seeded(seed){let t=seed>>>0;return()=>{t+=0x6D2B79F5;let x=t;x=Math.imul(x^x>>>15,x|1);x^=x+Math.imul(x^x>>>7,x|61);return((x^x>>>14)>>>0)/4294967296}}

function fillBoard(board,rng){
  const letters="EEEEAAAAARRRIIIOOONNNSTTTLLCCUUUMMDDPPGGBBVVYYHFKWJXZQ";
  for(let r=0;r<board.length;r++)for(let c=0;c<board.length;c++)if(!board[r][c])board[r][c]=letters[Math.floor(rng()*letters.length)];
}

function bonusWords(board,targets){
  const set=new Set(targets), found=[];
  for(const w of COMMON_BONUS){
    if(w.length<3 || set.has(w))continue;
    if(canTrace(board,w))found.push(w);
  }
  return [...new Set(found)].slice(0,12);
}

export function generateLevel(level,forcedTargets=null){
  const rng=seeded(0xA5F17+level*7919);
  const n=level<20?5:level<80?6:level<180?7:8;
  const count=level<10?4:level<50?5:level<150?6:7;
  let pool=[...(forcedTargets||[])];
  if(!pool.length){
    const shuffled=randomize(WORDS.filter(w=>w.length>=4&&w.length<=Math.min(8,n+3)),rng);
    pool=shuffled.slice(0,count);
  }
  pool=[...new Set(pool.map(w=>w.toUpperCase()))].slice(0,count);

  // Safer explicit backtracking without relying on mutable candidate state.
  function solve(i,board,paths){
    if(i===pool.length){
      const b=board.map(row=>row.slice()); fillBoard(b,rng);
      if(pool.every(w=>canTrace(b,w))) return {board:b,paths};
      return null;
    }
    const word=pool[i];
    const opts=[];
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)for(const [dr,dc] of DIRS){
      let ok=true,path=[];
      for(let k=0;k<word.length;k++){
        const rr=r+dr*k,cc=c+dc*k;
        if(rr<0||rr>=n||cc<0||cc>=n|| (board[rr][cc]&&board[rr][cc]!==word[k])){ok=false;break}
        path.push([rr,cc]);
      }
      if(ok)opts.push([r,c,dr,dc,path]);
    }
    randomize(opts,rng);
    for(const [r,c,dr,dc,path] of opts){
      const copy=board.map(row=>row.slice());
      placeWord(copy,word,r,c,dr,dc);
      const result=solve(i+1,copy,{...paths,[word:path]});
      if(result)return result;
    }
    return null;
  }

  for(let attemptNo=0;attemptNo<40;attemptNo++){
    const result=solve(0,empty(n),{});
    if(result){
      const bonuses=bonusWords(result.board,pool);
      return {id:`L${level}`,level,size:n,targets:pool,board:result.board,paths:result.paths,bonusWords:bonuses,difficulty:n<=5?"Легко":n<=6?"Средне":n<=7?"Сложно":"Эксперт"};
    }
  }
  throw new Error("Не удалось сгенерировать гарантированно решаемый уровень");
}

export function validateLevel(level){
  const required=level.targets.every(w=>canTrace(level.board,w));
  const dimensions=level.board.every(r=>r.length===level.size)&&level.board.length===level.size;
  return required&&dimensions;
}
