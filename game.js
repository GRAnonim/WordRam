import {generateLevel,canTrace,neighbors} from "./generator.js";

export class Game{
  constructor(ui,save){this.ui=ui;this.save=save;this.level=generateLevel(save.level);this.path=[];this.drag=false;this.bonusFound=new Set();this.bind()}
  bind(){
    this.ui.board.addEventListener("pointerdown",e=>{const cell=this.cellFromPoint(e.clientX,e.clientY);if(cell)this.start(cell,e.pointerId)});
    this.ui.board.addEventListener("pointermove",e=>{if(this.drag)this.move(this.cellFromPoint(e.clientX,e.clientY))});
    window.addEventListener("pointerup",()=>this.finish());
  }
  cellFromPoint(x,y){
    const rect=this.ui.board.getBoundingClientRect(), n=this.level.size;
    const col=Math.floor((x-rect.left)/(rect.width/n)), row=Math.floor((y-rect.top)/(rect.height/n));
    return row>=0&&row<n&&col>=0&&col<n?[row,col]:null;
  }
  start(cell,pointerId){this.drag=true;this.path=[cell];this.renderPath();try{this.ui.board.setPointerCapture(pointerId)}catch{}}
  move(cell){
    if(!cell||!this.path.length)return;
    const last=this.path[this.path.length-1];
    if(last[0]===cell[0]&&last[1]===cell[1])return;
    const ok=neighbors(last[0],last[1],this.level.size).some(x=>x[0]===cell[0]&&x[1]===cell[1]);
    if(!ok)return;
    if(this.path.some(x=>x[0]===cell[0]&&x[1]===cell[1]))return;
    this.path.push(cell);this.renderPath();
  }
  finish(){
    if(!this.drag)return;this.drag=false;
    const word=this.path.map(([r,c])=>this.level.board[r][c]).join("");
    this.path=[];
    if(!word){this.renderPath();return}
    const target=this.level.targets.includes(word);
    const bonus=!target&&word.length>=3&&!this.save.completedBonus?.includes?.(word);
    if(target&&!this.save.completed.includes(word)){
      this.save.completed.push(word);this.save.coins+=5;this.save.level=Math.max(this.save.level,this.level.level);
      this.ui.message(`✓ ${word} найдено! +5 монет`);
      if(this.save.completed.length===this.level.targets.length)this.ui.message(`Уровень пройден! 🎉`);
      this.ui.save();
    }else if(bonus){
      this.save.coins+=2;this.save.foundBonus=(this.save.foundBonus||0)+1;this.bonusFound.add(word);
      this.ui.message(`Бонус: ${word} +2 монеты`);
      this.ui.save();
    }else{
      this.ui.message("Попробуйте другое слово");
    }
    this.renderPath();this.ui.render(this.level,this.save,this.bonusFound);
  }
  renderPath(){this.ui.board.querySelectorAll(".cell").forEach(c=>c.classList.remove("path"));this.path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.add("path"))}
  next(){if(this.save.completed.length<this.level.targets.length){this.ui.message("Сначала найдите все основные слова");return}this.save.level++;this.save.completed=[];this.level=generateLevel(this.save.level);this.bonusFound=new Set();this.ui.render(this.level,this.save,this.bonusFound)}
  hint(){
    if(this.save.coins<10){this.ui.message("Недостаточно монет");return}
    const missing=this.level.targets.find(w=>!this.save.completed.includes(w));if(!missing)return;
    this.save.coins-=10;this.ui.save();
    const path=this.level.paths[missing]||[];
    path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.add("hint"));
    setTimeout(()=>path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.remove("hint")),1200);
  }
}
