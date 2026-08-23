class WordRamGame{
constructor(){this.save=window.WordRamStorage.load();this.level=null;this.path=[];this.drag=false;this.tab="home";this.bonusFound=new Set();this.render();document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>this.go(b.dataset.tab));document.getElementById("settingsBtn").onclick=()=>this.go("settings")}
go(t){this.tab=t;this.render()}
loadLevel(n){this.level=window.WordRamGenerator.generate(n);this.path=[];this.bonusFound.clear();this.tab="home";this.render()}
completed(){return this.save.completed[this.level.number]||[]}
render(){
document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===this.tab));
document.getElementById("coinTop").textContent=this.save.coins;
const s=document.getElementById("screen");
if(this.tab==="home"){if(!this.level)this.level=window.WordRamGenerator.generate(this.save.level);s.innerHTML=this.home();this.mountBoard()}
if(this.tab==="levels")s.innerHTML=this.levels();
if(this.tab==="daily")s.innerHTML=this.daily();
if(this.tab==="settings")s.innerHTML=this.settings();
this.extras()
}
home(){
const done=this.completed();
return `<section class="hero"><div class="eyebrow">Глава ${Math.ceil(this.level.number/25)} · ${this.level.difficulty}</div><div class="hero-title">Найдите спрятанные слова</div><div class="hero-sub">Слова не показаны на поле. Ищите их самостоятельно. Каждый следующий символ — только соседняя клетка по горизонтали или вертикали.</div><div class="info-row"><div class="info-card"><span>Уровень</span><b>${this.level.number}</b></div><div class="info-card"><span>Найдено</span><b>${done.length}/${this.level.targets.length}</b></div><div class="info-card"><span>Поворотов</span><b>${this.level.avgTurns}</b></div></div></section>
<section class="game-card"><div class="game-head"><div><div class="eyebrow">Филворд</div><h2>Найдите все слова</h2></div><button id="hintBtn" class="hint-btn">💡 Подсказка 25</button></div><div id="board" class="board"></div><div id="message" class="message"></div><div class="actions"><button id="nextBtn" class="btn btn-primary">Следующий уровень</button><button id="levelsBtn" class="btn btn-secondary">Все уровни</button></div><div class="muted" style="text-align:center;margin-top:10px">Бонусные слова: ${this.level.bonus.length} возможных</div></section>`
}
mountBoard(){
const b=document.getElementById("board");b.style.gridTemplateColumns=`repeat(${this.level.size},1fr)`;this.uiBoard=b;this.uiMessage=document.getElementById("message");
this.level.board.flat().forEach(ch=>{const x=document.createElement("div");x.className="cell";x.textContent=ch;b.appendChild(x)});
const done=this.completed();done.forEach(w=>(this.level.paths[w]||[]).forEach(([r,c])=>b.children[r*this.level.size+c]?.classList.add("found")));
b.addEventListener("pointerdown",e=>this.start(e));b.addEventListener("pointermove",e=>this.move(e));b.addEventListener("pointerup",()=>this.end());b.addEventListener("pointercancel",()=>this.end());
}
cell(e){const r=this.uiBoard.getBoundingClientRect(),n=this.level.size,w=r.width/n,x=e.clientX-r.left,y=e.clientY-r.top;if(x<0||y<0||x>r.width||y>r.height)return null;return [Math.floor(y/w),Math.floor(x/w)]}
start(e){const c=this.cell(e);if(!c)return;this.drag=true;this.path=[c];this.paint()}
move(e){if(!this.drag)return;const c=this.cell(e);if(!c)return;const last=this.path.at(-1);if(last[0]===c[0]&&last[1]===c[1])return;if(!window.WordRamGenerator.isNeighbor(last,c))return;if(this.path.some(p=>p[0]===c[0]&&p[1]===c[1]))return;this.path.push(c);this.paint()}
end(){if(!this.drag)return;this.drag=false;const w=this.path.map(([r,c])=>this.level.board[r][c]).join("");const rev=[...w].reverse().join("");let target=this.level.targets.includes(w)?w:this.level.targets.includes(rev)?rev:null;
if(target){const done=this.completed();if(!done.includes(target)){done.push(target);this.save.completed[this.level.number]=done;this.save.coins+=5;window.WordRamStorage.save(this.save);this.message(`Слово найдено! +5 монет`);if(done.length===this.level.targets.length){this.save.level=Math.max(this.save.level,this.level.number+1);window.WordRamStorage.save(this.save);setTimeout(()=>this.message("Уровень пройден! 🎉"),150)}}else this.message("Это слово уже найдено");}
else if(w.length>=3&&this.level.bonus.includes(w)){if(!this.bonusFound.has(w)){this.bonusFound.add(w);this.save.coins+=2;this.save.bonusCount++;window.WordRamStorage.save(this.save);this.message(`Бонус-слово! +2 монеты`)}}
else this.message("Попробуйте другой маршрут");
this.path=[];this.render()}
paint(){this.uiBoard.querySelectorAll(".cell").forEach(x=>x.classList.remove("path"));this.path.forEach(([r,c])=>this.uiBoard.children[r*this.level.size+c]?.classList.add("path"))}
message(t){if(this.uiMessage){this.uiMessage.textContent=t;clearTimeout(this.mt);this.mt=setTimeout(()=>this.uiMessage.textContent="",2200)}}
hint(){
const done=this.completed(),word=this.level.targets.find(w=>!done.includes(w));if(!word){this.message("Все слова найдены");return}
if(this.save.coins<25){this.message("Недостаточно монет");return}
this.save.coins-=25;window.WordRamStorage.save(this.save);const p=this.level.paths[word]||[];
// Sequential hint: one new letter per press. Stored progress is local to this level/session.
this.hintStep=(this.hintStep||0)+1;const count=Math.min(this.hintStep,p.length);
p.slice(0,count).forEach(([r,c])=>this.uiBoard.children[r*this.level.size+c]?.classList.add("hint"));
this.message(`Открыта буква ${count} из ${p.length}`);
this.renderTopOnlyHints(p.slice(0,count));
}
renderTopOnlyHints(path){path.forEach(([r,c])=>this.uiBoard.children[r*this.level.size+c]?.classList.add("hint"))}
extras(){
if(this.tab==="levels")document.querySelectorAll("[data-level]").forEach(b=>b.onclick=()=>this.loadLevel(+b.dataset.level));
if(this.tab==="settings"){document.getElementById("reset").onclick=()=>{if(confirm("Сбросить прогресс?"))window.WordRamStorage.reset()}}
if(this.tab==="daily")document.getElementById("dailyBtn")?.addEventListener("click",()=>{this.loadLevel((new Date().getDate()%25)+1)})
if(this.tab==="home"){document.getElementById("hintBtn").onclick=()=>this.hint();document.getElementById("nextBtn").onclick=()=>this.next();document.getElementById("levelsBtn").onclick=()=>this.go("levels")}
}
next(){if(this.completed().length<this.level.targets.length){this.message("Сначала найдите все слова");return}this.loadLevel(this.level.number+1)}
levels(){let max=Math.max(100,this.save.level+20),h='<section class="list-card"><div class="section-title">Уровни</div><div class="muted">Открыт уровень '+this.save.level+'</div><div class="level-grid">';for(let i=1;i<=max;i++){const open=i<=this.save.level,done=!!this.save.completed[i]?.length;h+=`<button class="level-btn ${open?"":"locked"} ${i===this.save.level?"current":""} ${done?"done":""}" data-level="${i}" ${open?"":"disabled"}>${i}</button>`}return h+"</div></section>"}
daily(){return `<section class="list-card"><div class="eyebrow">Сегодня</div><div class="section-title">Ежедневный уровень</div><p class="muted">Отдельный уровень с теми же строгими правилами. Слова не показываются заранее.</p><button id="dailyBtn" class="btn btn-primary">Играть сегодня</button></section>`}
settings(){return `<section class="list-card"><div class="section-title">Настройки</div><label class="setting-row"><span>Звук</span><input type="checkbox" ${this.save.settings.sound?"checked":""}></label><label class="setting-row"><span>Вибрация</span><input type="checkbox" ${this.save.settings.vibrate?"checked":""}></label><button id="reset" class="danger-btn">Сбросить прогресс</button><p class="muted">Интерфейс — русский. Игровые слова — английские.</p></section>`}
}
window.WordRamGame=WordRamGame;