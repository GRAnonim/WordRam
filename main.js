import {Game} from "./game.js";
import {load,save,reset} from "./storage.js";

const state=load();
const ui={
  board:document.getElementById("board"), targets:document.getElementById("targets"),
  levelNum:document.getElementById("levelNum"),coins:document.getElementById("coins"),
  found:document.getElementById("found"),targetCount:document.getElementById("targetCount"),
  chapter:document.getElementById("chapter"),difficulty:document.getElementById("difficulty"),
  bonusCounter:document.getElementById("bonusCounter"),messageEl:document.getElementById("message"),
  hintBtn:document.getElementById("hintBtn"),
  save:()=>save(state),
  message(t){this.messageEl.textContent=t;clearTimeout(this.mt);this.mt=setTimeout(()=>this.messageEl.textContent="",2200)},
  render(level,s,bonus){
    this.levelNum.textContent=level.level;this.coins.textContent=s.coins;this.found.textContent=s.completed.length;
    this.targetCount.textContent=level.targets.length;this.chapter.textContent=`Глава ${Math.ceil(level.level/25)}`;this.difficulty.textContent=level.difficulty;
    this.targets.innerHTML=level.targets.map(w=>`<span class="target ${s.completed.includes(w)?"done":""}">${w}</span>`).join("");
    this.bonusCounter.textContent=`Найдено: ${bonus.size}`;
    this.board.style.gridTemplateColumns=`repeat(${level.size},1fr)`;this.board.innerHTML="";
    level.board.flat().forEach((letter,i)=>{const b=document.createElement("button");b.className="cell";b.textContent=letter;b.dataset.i=i;this.board.appendChild(b)});
  }
};
const game=new Game(ui,state);ui.render(game.level,state,game.bonusFound);
document.getElementById("newLevelBtn").onclick=()=>game.next();
ui.hintBtn.onclick=()=>game.hint();
document.getElementById("settingsBtn").onclick=()=>document.getElementById("settingsDialog").showModal();
document.getElementById("closeSettings").onclick=()=>document.getElementById("settingsDialog").close();
document.getElementById("resetBtn").onclick=()=>{if(confirm("Сбросить весь прогресс?"))reset()};
document.getElementById("soundToggle").checked=state.settings.sound;
document.getElementById("vibrationToggle").checked=state.settings.vibration;
document.getElementById("soundToggle").onchange=e=>{state.settings.sound=e.target.checked;save(state)};
document.getElementById("vibrationToggle").onchange=e=>{state.settings.vibration=e.target.checked;save(state)};
