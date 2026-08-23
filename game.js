class WordraGame{
  constructor(root){
    this.root=root;
    this.save=window.WordraStorage.load();
    this.level=null;
    this.path=[];
    this.dragging=false;
    this.hinted=[];
    this.bonusFound=new Set();
    this.currentTab="home";
    this.ui={};
    this.install();
  }
  install(){
    document.querySelectorAll(".nav-btn").forEach(btn=>{
      btn.addEventListener("click",()=>this.go(btn.dataset.tab));
    });
    document.getElementById("settingsBtn").onclick=()=>this.go("settings");
    document.getElementById("closeSettings").onclick=()=>document.getElementById("settingsDialog").close();
    document.getElementById("resetBtn").onclick=()=>{if(confirm("Сбросить весь прогресс?"))window.WordraStorage.reset()};
  }
  getLevel(n){return window.WordraGenerator.generate(n)}
  levelCompleted(level){return (this.save.completed[level.number]||[]).length>=level.targets.length}
  loadLevel(n){
    this.level=this.getLevel(n);
    this.path=[];this.hinted=[];this.bonusFound=new Set();
    this.currentTab="home";this.render();
  }
  go(tab){
    this.currentTab=tab;
    if(tab==="home"&&!this.level)this.loadLevel(this.save.level);
    else this.render();
  }
  cellAt(clientX,clientY){
    const rect=this.ui.board.getBoundingClientRect();
    const size=this.level.size;
    const gap=6;
    const w=rect.width/size;
    const x=clientX-rect.left,y=clientY-rect.top;
    if(x<0||y<0||x>rect.width||y>rect.height)return null;
    let c=Math.floor(x/w),r=Math.floor(y/w);
    c=Math.max(0,Math.min(size-1,c));r=Math.max(0,Math.min(size-1,r));
    return [r,c];
  }
  startPointer(e){
    const cell=this.cellAt(e.clientX,e.clientY);if(!cell)return;
    this.dragging=true;this.path=[cell];this.ui.board.setPointerCapture?.(e.pointerId);this.paint();
  }
  movePointer(e){
    if(!this.dragging)return;
    const cell=this.cellAt(e.clientX,e.clientY);if(!cell)return;
    const last=this.path[this.path.length-1];
    if(last[0]===cell[0]&&last[1]===cell[1])return;
    if(!window.WordraGenerator.isNeighbor(last,cell))return;
    if(this.path.some(x=>x[0]===cell[0]&&x[1]===cell[1]))return;
    this.path.push(cell);this.paint();
  }
  endPointer(){
    if(!this.dragging)return;
    this.dragging=false;
    const word=this.path.map(([r,c])=>this.level.board[r][c]).join("");
    const reverse=[...word].reverse().join("");
    const targetKey=this.findTarget(word)||this.findTarget(reverse);
    if(targetKey){
      const completed=this.save.completed[this.level.number]||[];
      if(!completed.includes(targetKey)){
        completed.push(targetKey);this.save.completed[this.level.number]=completed;
        this.save.coins+=5;
        this.message(`Слово ${targetKey} найдено! +5 монет`);
        if(this.levelCompleted(this.level)){
          this.save.level=Math.max(this.save.level,this.level.number+1);
          this.message(`Уровень ${this.level.number} пройден! 🎉`);
        }
        window.WordraStorage.save(this.save);
      }
    }else if(word.length>=3 && !this.level.targets.includes(word)){
      if(!this.bonusFound.has(word) && this.level.bonus.includes(word)){
        this.bonusFound.add(word);this.save.coins+=2;this.save.bonusCount+=1;window.WordraStorage.save(this.save);
        this.message(`Бонус-слово ${word}! +2 монеты`);
      }else{
        this.message("Это не нужное слово");
      }
    }else{
      this.message("Попробуйте другое слово");
    }
    this.path=[];this.render();
  }
  findTarget(word){
    const completed=this.save.completed[this.level.number]||[];
    if(this.level.targets.includes(word))return word;
    return null;
  }
  paint(){
    this.ui.board.querySelectorAll(".cell").forEach(c=>c.classList.remove("path"));
    this.path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.add("path"));
  }
  message(text){
    if(this.ui.message){this.ui.message.textContent=text;clearTimeout(this.msgT);this.msgT=setTimeout(()=>this.ui.message.textContent="",2200)}
  }
  hint(){
    const remaining=(this.level.targets||[]).find(w=>!(this.save.completed[this.level.number]||[]).includes(w));
    if(!remaining){this.message("Все основные слова уже найдены");return}
    if(this.save.coins<25){this.message("Недостаточно монет");return}
    this.save.coins-=25;window.WordraStorage.save(this.save);
    const path=this.level.paths[remaining]||[];
    path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.add("hint"));
    this.message(`Подсказка: ${remaining[0]}...`);
    setTimeout(()=>path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.remove("hint")),1600);
    this.renderTop();
  }
  nextLevel(){
    if(!this.levelCompleted(this.level)){this.message("Сначала найдите все основные слова");return}
    this.loadLevel(this.level.number+1);
  }
  renderTop(){
    const c=document.getElementById("coinTop");if(c)c.textContent=this.save.coins;
  }
  render(){
    this.renderTop();
    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===this.currentTab));
    const screen=document.getElementById("screen");
    if(this.currentTab==="home"){if(!this.level)this.level=this.getLevel(this.save.level);screen.innerHTML=this.homeHTML();this.mountBoard()}
    if(this.currentTab==="levels")screen.innerHTML=this.levelsHTML();
    if(this.currentTab==="daily")screen.innerHTML=this.dailyHTML();
    if(this.currentTab==="settings")screen.innerHTML=this.settingsHTML();
  }
  homeHTML(){
    const done=this.save.completed[this.level.number]||[];
    return `<section class="hero">
      <div class="eyebrow">Глава ${Math.ceil(this.level.number/25)} · ${this.level.difficulty}</div>
      <div class="hero-title">Найдите спрятанные слова</div>
      <div class="hero-sub">Проводите по соседним буквам. Только горизонталь и вертикаль — без диагоналей и прыжков.</div>
      <div class="info-row">
        <div class="info-card"><span>Уровень</span><b>${this.level.number}</b></div>
        <div class="info-card"><span>Найдено</span><b>${done.length}/${this.level.targets.length}</b></div>
        <div class="info-card"><span>Монеты</span><b>🪙 ${this.save.coins}</b></div>
      </div>
    </section>
    <section class="game-card">
      <div class="game-head">
        <div><div class="targets-title">Основные слова</div><div class="progress-line"><h2>${done.length}/${this.level.targets.length}</h2></div></div>
        <button id="hintBtn" class="hint-btn">💡 Подсказка 25</button>
      </div>
      <div class="targets">${this.level.targets.map(w=>`<span class="target ${done.includes(w)?"done":""}">${w}</span>`).join("")}</div>
      <div class="board-wrap"><div id="board" class="board"></div></div>
      <div id="message" class="message"></div>
      <div class="actions">
        <button id="nextBtn" class="btn btn-primary">Следующий уровень</button>
        <button id="levelsBtn" class="btn btn-secondary">Все уровни</button>
      </div>
      <div class="muted" style="text-align:center;margin-top:10px">Бонусные слова: ${this.level.bonus.length} возможных</div>
    </section>`;
  }
  mountBoard(){
    this.ui.board=document.getElementById("board");this.ui.message=document.getElementById("message");
    this.ui.board.style.gridTemplateColumns=`repeat(${this.level.size},1fr)`;
    this.level.board.flat().forEach((letter,i)=>{
      const b=document.createElement("div");b.className="cell";b.textContent=letter;
      this.ui.board.appendChild(b);
    });
    const done=new Set(this.save.completed[this.level.number]||[]);
    for(const word of done){
      const path=this.level.paths[word]||[];
      path.forEach(([r,c])=>this.ui.board.children[r*this.level.size+c]?.classList.add("found"));
    }
    this.ui.board.addEventListener("pointerdown",e=>this.startPointer(e));
    this.ui.board.addEventListener("pointermove",e=>this.movePointer(e));
    this.ui.board.addEventListener("pointerup",()=>this.endPointer());
    this.ui.board.addEventListener("pointercancel",()=>this.endPointer());
    document.getElementById("hintBtn").onclick=()=>this.hint();
    document.getElementById("nextBtn").onclick=()=>this.nextLevel();
    document.getElementById("levelsBtn").onclick=()=>this.go("levels");
  }
  levelsHTML(){
    const max=Math.max(100,this.save.level+20);
    let html=`<section class="list-card"><div class="section-title">Уровни</div><div class="muted">Открыт уровень ${this.save.level}. Новые уровни открываются после прохождения.</div><div class="level-grid" style="margin-top:14px">`;
    for(let i=1;i<=max;i++){
      const unlocked=i<=this.save.level, done=!!this.save.completed[i]&&this.save.completed[i].length>0;
      html+=`<button class="level-btn ${unlocked?"":"locked"} ${i===this.save.level?"current":""} ${done?"done":""}" data-level="${i}" ${unlocked?"":"disabled"}>${i}</button>`;
    }
    html+=`</div></section>`;
    return html;
  }
  dailyHTML(){
    const d=new Date();const date=d.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"});
    return `<section class="list-card daily"><div class="date">${date.toUpperCase()}</div><h2>Слово дня</h2><p>Сегодняшний отдельный уровень. Он использует те же строгие правила Wordra: только соседние горизонтальные и вертикальные шаги.</p><button id="dailyBtn" class="btn btn-primary">Играть сегодня</button></section>`;
  }
  settingsHTML(){
    return `<section class="list-card"><div class="section-title">Настройки</div><div class="setting-card">
      <label class="setting-row"><span>Звук</span><input id="localSound" type="checkbox" ${this.save.settings.sound?"checked":""}></label>
      <label class="setting-row"><span>Вибрация</span><input id="localVibrate" type="checkbox" ${this.save.settings.vibrate?"checked":""}></label>
      <button id="localReset" class="danger-btn">Сбросить прогресс</button>
      <p class="muted">Интерфейс на русском, слова и уровни — на английском.</p>
    </div></section>`;
  }
  mountExtras(){
    if(this.currentTab==="levels"){
      document.querySelectorAll("[data-level]").forEach(btn=>btn.onclick=()=>{this.loadLevel(Number(btn.dataset.level));});
    }
    if(this.currentTab==="daily"){
      document.getElementById("dailyBtn")?.addEventListener("click",()=>{
        const old=this.level;const current=this.save.level;
        this.level=window.WordraGenerator.generate((new Date().getDate()%25)+1);
        this.currentTab="home";this.render();
      });
    }
    if(this.currentTab==="settings"){
      document.getElementById("localSound")?.addEventListener("change",e=>{this.save.settings.sound=e.target.checked;window.WordraStorage.save(this.save)});
      document.getElementById("localVibrate")?.addEventListener("change",e=>{this.save.settings.vibrate=e.target.checked;window.WordraStorage.save(this.save)});
      document.getElementById("localReset")?.addEventListener("click",()=>{if(confirm("Сбросить весь прогресс?"))window.WordraStorage.reset()});
    }
  }
  afterRender(){this.mountExtras()}
}
window.WordraGame=WordraGame;
