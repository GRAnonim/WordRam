import { CONFIG } from './data.js';

export class GameController {
  constructor({ boardEl, wordListEl, onUpdate, onToast }) {
    this.boardEl=boardEl; this.wordListEl=wordListEl; this.onUpdate=onUpdate; this.onToast=onToast;
    this.level=null; this.letters=[]; this.selected=[]; this.dragging=false; this.foundTargets=new Set(); this.foundBonus=new Set(); this.foundPaths=[]; this.hinted=new Set();
    this.boundPointerMove=e=>this.pointerMove(e); this.boundPointerUp=e=>this.pointerUp(e);
  }

  loadLevel(level) {
    this.level=level; this.letters=level.board.map(r=>r.slice()); this.reset(false); this.render();
  }
  reset(show=true) {
    this.selected=[]; this.dragging=false; this.foundTargets=new Set(); this.foundBonus=new Set(); this.foundPaths=[]; this.hinted=new Set();
    if(show) this.onToast('Level restarted');
    this.render();
  }
  render() {
    if(!this.level) return;
    this.boardEl.innerHTML=''; this.boardEl.style.setProperty('--cols',this.level.cols);
    for(let r=0;r<this.level.rows;r++) for(let c=0;c<this.level.cols;c++){
      const cell=document.createElement('button'); cell.type='button'; cell.className='cell'; cell.dataset.r=r; cell.dataset.c=c; cell.textContent=this.letters[r][c];
      if(this.hinted.has(`${r}:${c}`)) cell.classList.add('hinted');
      this.boardEl.appendChild(cell);
    }
    this.wordListEl.innerHTML='';
    for(const t of this.level.targets){
      const el=document.createElement('div'); el.className='word-chip'+(this.foundTargets.has(t.word)?' found':''); el.textContent=t.word; this.wordListEl.appendChild(el);
    }
    this.bindPointers(); this.paintFound(); this.paintSelection(); this.onUpdate?.(this.snapshot());
  }
  bindPointers(){
    this.boardEl.onpointerdown=e=>{
      const cell=e.target.closest('.cell'); if(!cell) return;
      e.preventDefault(); this.dragging=true; this.selected=[[+cell.dataset.r,+cell.dataset.c]]; cell.setPointerCapture?.(e.pointerId); this.paintSelection();
    };
    this.boardEl.onpointermove=e=>this.pointerMove(e);
    this.boardEl.onpointerup=e=>this.pointerUp(e);
    this.boardEl.onpointercancel=e=>this.pointerUp(e);
  }
  pointerMove(e){
    if(!this.dragging) return; const el=document.elementFromPoint(e.clientX,e.clientY)?.closest('.cell'); if(!el || !this.boardEl.contains(el)) return;
    const pos=[+el.dataset.r,+el.dataset.c]; const last=this.selected.at(-1); if(!last) return;
    if(pos[0]===last[0]&&pos[1]===last[1]) return;
    if(Math.abs(pos[0]-last[0])+Math.abs(pos[1]-last[1])!==1) return;
    if(this.selected.some(p=>p[0]===pos[0]&&p[1]===pos[1])) return;
    this.selected.push(pos); this.paintSelection();
  }
  pointerUp(){
    if(!this.dragging) return; this.dragging=false; const path=this.selected.slice(); this.selected=[]; this.paintSelection(); if(path.length>=3) this.evaluate(path);
  }
  paintSelection(){ this.boardEl.querySelectorAll('.cell.selected').forEach(e=>e.classList.remove('selected')); for(const [r,c] of this.selected){const e=this.boardEl.querySelector(`[data-r="${r}"][data-c="${c}"]`); e?.classList.add('selected');} }
  paintFound(){
    this.boardEl.querySelectorAll('.cell').forEach(e=>e.classList.remove('found'));
    for(const item of this.foundPaths){ for(const [r,c] of item.path){ const e=this.boardEl.querySelector(`[data-r="${r}"][data-c="${c}"]`); e?.classList.add(item.kind==='bonus'?'found bonus':'found'); } }
  }
  evaluate(path){
    const formed=path.map(([r,c])=>this.letters[r][c]).join('');
    const rev=[...formed].reverse().join('');
    const target=this.level.targets.find(t=>!this.foundTargets.has(t.word)&&(t.word===formed||t.word===rev));
    if(target){ this.foundTargets.add(target.word); this.foundPaths.push({kind:'target',word:target.word,path}); this.onToast(`${target.word} ✓  +${CONFIG.targetWordReward}`); this.render(); return {kind:'target',word:target.word}; }
    const bonus=formed.length>=CONFIG.minBonusLength && formed.length<=CONFIG.maxBonusLength && this.level.bonus.includes(formed) && !this.foundBonus.has(formed);
    if(bonus){ this.foundBonus.add(formed); this.foundPaths.push({kind:'bonus',word:formed,path}); this.onToast(`Bonus ${formed}  +${CONFIG.bonusReward}`); this.render(); return {kind:'bonus',word:formed}; }
    this.onToast('Not a word from this level');
    return {kind:'none'};
  }
  hint(){
    const missing=this.level.targets.find(t=>!this.foundTargets.has(t.word)); if(!missing) return null;
    const slice=missing.path.slice(0,Math.min(2,missing.path.length)); slice.forEach(([r,c])=>this.hinted.add(`${r}:${c}`)); this.render();
    return missing.word;
  }
  isComplete(){ return this.foundTargets.size===this.level.targets.length; }
  snapshot(){ return {foundTargets:this.foundTargets.size,targetCount:this.level?.targets.length||0,bonusCount:this.foundBonus.size,complete:this.isComplete()}; }
}
