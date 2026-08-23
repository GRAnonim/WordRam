const {WORDS,BONUS}=window.WORDRA_DATA;
const DIRS=[[1,0],[-1,0],[0,1],[0,-1]];

function rng(seed){
  let t=seed>>>0;
  return ()=>{
    t+=0x6D2B79F5;
    let x=t;
    x=Math.imul(x^x>>>15,x|1);
    x^=x+Math.imul(x^x>>>7,x|61);
    return ((x^x>>>14)>>>0)/4294967296;
  };
}
function shuffle(a,r){for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function empty(n){return Array.from({length:n},()=>Array(n).fill(""))}
function cloneBoard(b){return b.map(row=>row.slice())}
function isNeighbor(a,b){return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])===1}

function canPlaceStraight(board,word,row,col,dr,dc){
  const n=board.length,path=[];
  for(let i=0;i<word.length;i++){
    const r=row+dr*i,c=col+dc*i;
    if(r<0||r>=n||c<0||c>=n)return null;
    if(board[r][c] && board[r][c]!==word[i])return null;
    path.push([r,c]);
  }
  return path;
}
function place(board,word,row,col,dr,dc){
  const path=canPlaceStraight(board,word,row,col,dr,dc);
  if(!path)return null;
  path.forEach(([r,c],i)=>board[r][c]=word[i]);
  return path;
}
function allStraightPlacements(board,word){
  const n=board.length,res=[];
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)for(const [dr,dc] of DIRS){
    const path=canPlaceStraight(board,word,r,c,dr,dc);
    if(path)res.push({row:r,col:c,dr,dc,path});
  }
  return res;
}
function neighbors(board,r,c){
  const n=board.length,out=[];
  for(const [dr,dc] of DIRS){
    const rr=r+dr,cc=c+dc;
    if(rr>=0&&rr<n&&cc>=0&&cc<n)out.push([rr,cc]);
  }
  return out;
}
function canTrace(board,word){
  const n=board.length;
  function dfs(r,c,i,used){
    if(board[r][c]!==word[i])return false;
    const k=r+","+c;
    if(used.has(k))return false;
    if(i===word.length-1)return true;
    used.add(k);
    for(const [rr,cc] of neighbors(board,r,c)) if(dfs(rr,cc,i+1,used)){used.delete(k);return true}
    used.delete(k);
    return false;
  }
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(dfs(r,c,0,new Set()))return true;
  return false;
}
function findPath(board,word){
  const n=board.length;
  function dfs(r,c,i,path,used){
    if(board[r][c]!==word[i])return null;
    const k=r+","+c;if(used.has(k))return null;
    const next=path.concat([[r,c]]);
    if(i===word.length-1)return next;
    used.add(k);
    for(const [rr,cc] of neighbors(board,r,c)){
      const p=dfs(rr,cc,i+1,next,used);
      if(p){used.delete(k);return p}
    }
    used.delete(k);return null;
  }
  for(let r=0;r<n;r++)for(let c=0;c<n;c++){const p=dfs(r,c,0,[],new Set());if(p)return p}
  return null;
}
function fillBoard(board,r){
  const letters="EEEEEEEEAAAAAARRRRIIIIOOOONNNNSSSSTTTTLLLLCCUUUMMDDPPGGGBBVYYHFWWKJXZQ";
  for(let i=0;i<board.length;i++)for(let j=0;j<board.length;j++)if(!board[i][j])board[i][j]=letters[Math.floor(r()*letters.length)];
}
function levelWords(level,r,size){
  const maxLen=size+2;
  const candidates=WORDS.filter(w=>w.length>=4&&w.length<=maxLen);
  const shuffled=shuffle([...candidates],r);
  const count=level<10?4:level<50?5:level<150?6:level<350?7:8;
  const selected=[];
  for(const w of shuffled){
    if(selected.includes(w))continue;
    selected.push(w);
    if(selected.length===count)break;
  }
  return selected.sort((a,b)=>b.length-a.length);
}
function generate(level){
  const seed=(0x129A + level*2654435761)>>>0;
  const r=rng(seed);
  const size=level<20?5:level<80?6:level<180?7:8;
  let targets=levelWords(level,r,size);

  for(let retry=0;retry<50;retry++){
    const board=empty(size), paths={};
    let ok=true;
    // Place longest words first, allowing crossings. Backtracking guarantees all target words.
    function solve(i){
      if(i===targets.length){
        const b=cloneBoard(board);
        fillBoard(b,r);
        for(const w of targets) if(!canTrace(b,w)) return null;
        const finalPaths={};
        for(const w of targets) finalPaths[w]=findPath(b,w);
        return {board:b,paths:finalPaths};
      }
      const w=targets[i];
      const opts=shuffle(allStraightPlacements(board,w),r);
      // Prefer placements that intersect already placed letters.
      opts.sort((a,b)=>{
        const score=x=>x.path.reduce((s,[rr,cc])=>s+(board[rr][cc]?1:0),0);
        return score(b)-score(a);
      });
      for(const p of opts){
        const changed=[];
        let conflict=false;
        for(let k=0;k<p.path.length;k++){
          const [rr,cc]=p.path[k];
          if(board[rr][cc] && board[rr][cc]!==w[k]){conflict=true;break}
          if(!board[rr][cc]){board[rr][cc]=w[k];changed.push([rr,cc])}
        }
        if(!conflict){
          const result=solve(i+1);
          if(result) return result;
        }
        changed.forEach(([rr,cc])=>board[rr][cc]="");
      }
      return null;
    }
    const result=solve(0);
    if(result){
      const finalBoard=result.board;
      const finalPaths=result.paths;
      const bonus=[];
      for(const w of BONUS){
        if(targets.includes(w)||w.length<3)continue;
        if(canTrace(finalBoard,w)) bonus.push(w);
      }
      return {
        id:"level-"+level,
        number:level,
        size,
        targets:[...targets],
        board:finalBoard.map(row=>row.slice()),
        paths:finalPaths,
        bonus:[...new Set(bonus)].slice(0,14),
        difficulty:size===5?"Легко":size===6?"Средне":size===7?"Сложно":"Эксперт"
      };
    }
    // If random target selection produced a hard set, choose a new set.
    targets=levelWords(level+retry+1,r,size);
  }
  throw new Error("Генератор не смог собрать валидный уровень");
}
function validate(level){
  if(!level || !Array.isArray(level.board) || level.board.length!==level.size)return false;
  if(level.board.some(r=>r.length!==level.size))return false;
  return level.targets.every(w=>!!findPath(level.board,w));
}
window.WordraGenerator={generate,validate,canTrace,findPath,isNeighbor};
