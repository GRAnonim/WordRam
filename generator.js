const {WORDS,BONUS}=window.WORDRAM_DATA;
const DIRS=[[1,0],[-1,0],[0,1],[0,-1]];
function rng(seed){let t=seed>>>0;return()=>{t+=0x6D2B79F5;let x=t;x=Math.imul(x^x>>>15,x|1);x^=x+Math.imul(x^x>>>7,x|61);return((x^x>>>14)>>>0)/4294967296}}
function shuffle(a,r){for(let i=a.length-1;i>0;i--){const j=Math.floor(r*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function empty(n){return Array.from({length:n},()=>Array(n).fill(""))}
function neigh(r,c,n){const a=[];for(const [dr,dc] of DIRS){const rr=r+dr,cc=c+dc;if(rr>=0&&rr<n&&cc>=0&&cc<n)a.push([rr,cc])}return a}
function isNeighbor(a,b){return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1])===1}
function turns(path){let t=0;for(let i=2;i<path.length;i++){const a=path[i-2],b=path[i-1],c=path[i];if(b[0]-a[0]!==c[0]-b[0]||b[1]-a[1]!==c[1]-b[1])t++}return t}
function randomPath(n,len,minTurns,r){
  for(let attempt=0;attempt<120;attempt++){
    let path=[[Math.floor(r()*n),Math.floor(r()*n)]],used=new Set([path[0].join(",")]);
    let prevDir=-1,tc=0;
    for(let i=1;i<len;i++){
      let opts=neigh(path[i-1][0],path[i-1][1],n).filter(p=>!used.has(p.join(",")));
      if(!opts.length)break;
      // Prefer a turn until the minimum is reached, then randomize.
      shuffle(opts,r);
      if(prevDir>=0 && tc<minTurns){
        const turnsOnly=opts.filter(p=>{const d=[p[0]-path[i-1][0],p[1]-path[i-1][1]];const di=DIRS.findIndex(x=>x[0]===d[0]&&x[1]===d[1]);return di!==prevDir});
        if(turnsOnly.length)opts=turnsOnly;
      }
      const p=opts[Math.floor(r()*opts.length)],d=[p[0]-path[i-1][0],p[1]-path[i-1][1]],di=DIRS.findIndex(x=>x[0]===d[0]&&x[1]===d[1]);
      if(prevDir>=0&&di!==prevDir)tc++;
      prevDir=di;path.push(p);used.add(p.join(","));
    }
    if(path.length===len&&tc>=minTurns)return path;
  }
  return null;
}
function canTrace(board,word){
  const n=board.length;
  function dfs(r,c,i,used){
    if(board[r][c]!==word[i])return false;const k=r+","+c;if(used.has(k))return false;if(i===word.length-1)return true;
    used.add(k);for(const p of neigh(r,c,n))if(dfs(p[0],p[1],i+1,used)){used.delete(k);return true}used.delete(k);return false;
  }
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(dfs(r,c,0,new Set()))return true;return false;
}
function findPath(board,word){
  const n=board.length;
  function dfs(r,c,i,path,used){
    if(board[r][c]!==word[i])return null;const k=r+","+c;if(used.has(k))return null;const p=path.concat([[r,c]]);if(i===word.length-1)return p;
    used.add(k);for(const q of neigh(r,c,n)){const z=dfs(q[0],q[1],i+1,p,used);if(z){used.delete(k);return z}}used.delete(k);return null;
  }
  for(let r=0;r<n;r++)for(let c=0;c<n;c++){const p=dfs(r,c,0,[],new Set());if(p)return p}return null;
}
function fill(board,r){const letters="EEEEEEEEAAAAAARRRRIIIIOOOONNNNSSSSTTTTLLLLCCUUUMMDDPPGGGBBVYYHFWWKJXZQ";for(let i=0;i<board.length;i++)for(let j=0;j<board.length;j++)if(!board[i][j])board[i][j]=letters[Math.floor(r()*letters.length)]}
function chooseWords(level,r,n){
  const count=level<10?4:level<50?5:level<150?6:level<350?7:8;
  const pool=WORDS.filter(w=>w.length>=4&&w.length<=Math.min(8,n+2));
  const a=pool.slice();shuffle(a,r);return a.slice(0,count).sort((x,y)=>y.length-x.length);
}
function generate(level){
  const n=level<20?5:level<80?6:level<180?7:8;
  const minTurns=level<20?2:level<100?3:4;
  const r=rng((0x71A9+level*2654435761)>>>0);
  for(let round=0;round<250;round++){
    const targets=chooseWords(level,r,n),board=empty(n),paths={};let failed=false;
    for(const word of targets){
      let best=null;
      for(let k=0;k<100;k++){
        const p=randomPath(n,word.length,minTurns,r);if(!p)continue;
        let ok=true,conf=0;
        for(let i=0;i<p.length;i++){const v=board[p[i][0]][p[i][1]];if(v&&v!==word[i]){ok=false;break}if(v===word[i])conf++}
        if(ok&&(!best||conf>best.conf))best={p,conf};
      }
      if(!best){failed=true;break}
      best.p.forEach((q,i)=>board[q[0]][q[1]]=word[i]);paths[word]=best.p;
    }
    if(failed)continue;
    fill(board,r);
    if(!targets.every(w=>canTrace(board,w)))continue;
    if(!targets.every(w=>turns(paths[w])>=minTurns))continue;
    const bonus=[];for(const w of BONUS)if(!targets.includes(w)&&w.length>=3&&canTrace(board,w))bonus.push(w);
    const avg=targets.reduce((s,w)=>s+turns(paths[w]),0)/targets.length;
    return {id:"level-"+level,number:level,size:n,targets,board,paths,bonus:[...new Set(bonus)].slice(0,14),difficulty:n===5?"Легко":n===6?"Средне":n===7?"Сложно":"Эксперт",avgTurns:Number(avg.toFixed(1))};
  }
  throw new Error("Не удалось создать валидный уровень");
}
function validate(l){
  if(!l||l.board.length!==l.size||l.board.some(r=>r.length!==l.size))return false;
  for(const w of l.targets){const p=l.paths[w];if(!p||p.length!==w.length||turns(p)<2)return false;for(let i=1;i<p.length;i++)if(!isNeighbor(p[i-1],p[i]))return false;if(p.map(x=>l.board[x[0]][x[1]]).join("")!==w)return false;if(!canTrace(l.board,w))return false}
  return true;
}
window.WordRamGenerator={generate,validate,canTrace,findPath,isNeighbor,turns};
