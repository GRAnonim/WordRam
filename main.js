import { generateLevel } from './generator.js';
import { CONFIG, getChapter } from './data.js';
import { loadState, saveState, exportState, importState, markLevelComplete } from './storage.js';
import { GameController } from './game.js';

const $=id=>document.getElementById(id);
const boardEl=$('board'), wordListEl=$('wordList'), toastEl=$('toast');
const state=loadState();
let mode='campaign', activeLevel=state.level, currentLevel=null, game=null;

function toast(message){ toastEl.textContent=message; toastEl.classList.remove('hidden'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>toastEl.classList.add('hidden'),1800); }
function save(){ saveState(state); }
function renderHeader(){
  const chapter=getChapter(activeLevel);
  $('chapterLabel').textContent=`CHAPTER ${['Beginnings','Momentum','Focus','Flow','Mastery','Wordra'].indexOf(chapter.name)+1} · ${chapter.name.toUpperCase()}`;
  $('levelValue').textContent=activeLevel;
  $('coinValue').textContent=state.coins;
  $('streakValue').textContent=state.streak;
  $('modeTitle').textContent=mode==='daily'?'Daily Wordra':mode==='event'?'Weekly Wordra Challenge':'Find the hidden words';
  $('modeSubtitle').textContent=mode==='campaign'?'Trace adjacent letters. Horizontal and vertical moves only.':mode==='daily'?'One deterministic puzzle for everyone today.': 'Race the clock. Your score is saved locally.';
}
function startLevel(levelNumber=activeLevel, nextMode=mode){
  mode=nextMode; activeLevel=levelNumber; currentLevel=generateLevel(levelNumber,mode); renderHeader();
  game.loadLevel(currentLevel); syncUI(game.snapshot());
}
function syncUI(snapshot){
  $('targetProgress').textContent=`${snapshot.foundTargets} / ${snapshot.targetCount}`;
  $('bonusValue').textContent=snapshot.bonusCount;
  $('nextButton').disabled=!snapshot.complete;
  if(snapshot.complete) completeOnce();
}
function completeOnce(){
  if(currentLevel._credited) return;
  currentLevel._credited=true;
  const before=state.completedLevels.includes(activeLevel);
  const reward=CONFIG.levelBaseReward + game.foundBonus.size*CONFIG.bonusReward;
  state.coins += reward;
  state.targetWordsFound += game.foundTargets.size;
  state.bonusWordsFound += game.foundBonus.size;
  state.totalBonus += game.foundBonus.size;
  if(!before && mode==='campaign') markLevelComplete(state,activeLevel);
  if(mode==='daily') claimDaily();
  if(mode==='event'){ state.eventScore += 100 + game.foundBonus.size*15; state.eventName=new Date().toISOString().slice(0,10); }
  checkAchievements(); save(); renderHeader();
  toast(`Level complete! +${reward} coins`);
}
function claimDaily(){
  const today=new Date().toISOString().slice(0,10);
  if(state.lastDaily!==today){
    const prev=new Date(); prev.setDate(prev.getDate()-1); const prevStr=prev.toISOString().slice(0,10);
    state.streak = state.lastDaily===prevStr ? state.streak+1 : 1;
    state.lastDaily=today; state.dailyCompleted=true;
  }
}
function checkAchievements(){
  const unlock=(id,name)=>{ if(!state.achievements.includes(id)){state.achievements.push(id); state.coins+=25; toast(`Achievement: ${name} +25`);} };
  if(state.completedLevels.length>=1) unlock('first-level','First Steps');
  if(state.bonusWordsFound>=10) unlock('bonus-10','Bonus Hunter');
  if(state.completedLevels.length>=50) unlock('50-levels','Wordra 50');
  if(state.streak>=7) unlock('streak-7','Seven-day streak');
}

function openSheet(title,html){ $('sheetTitle').textContent=title; $('sheetBody').innerHTML=html; $('sheet').classList.remove('hidden'); }
function closeSheet(){ $('sheet').classList.add('hidden'); }

function levelsView(){
  let html='<div class="chapter-grid">';
  for(let n=1;n<=100;n++){
    const unlocked=n<=Math.max(state.level,1); const done=state.completedLevels.includes(n);
    html+=`<button class="level-option ${done?'done':''} ${unlocked?'':'locked'}" data-level="${n}" ${unlocked?'':'disabled'}>${done?'✓ ':''}${n}</button>`;
  }
  html+='</div><p class="sheet-note">The campaign is generated on demand, so it can continue beyond level 1000.</p>';
  openSheet('Levels',html);
  document.querySelectorAll('.level-option:not([disabled])').forEach(b=>b.onclick=()=>{startLevel(+b.dataset.level,'campaign');closeSheet();});
}
function profileView(){
  const ach=state.achievements.length; const html=`<div class="profile-grid"><div><span>Completed</span><b>${state.completedLevels.length}</b></div><div><span>Bonuses</span><b>${state.bonusWordsFound}</b></div><div><span>Targets</span><b>${state.targetWordsFound}</b></div><div><span>Achievements</span><b>${ach}</b></div></div><div class="achievement-list"><div>🏁 First Steps ${state.achievements.includes('first-level')?'✓':'—'}</div><div>💎 Bonus Hunter ${state.achievements.includes('bonus-10')?'✓':'—'}</div><div>🏆 Wordra 50 ${state.achievements.includes('50-levels')?'✓':'—'}</div><div>🔥 Seven-day streak ${state.achievements.includes('streak-7')?'✓':'—'}</div></div>`; openSheet('Profile',html);
}
function menuView(){
  const html=`<div class="menu-list"><button id="exportSave">Export save</button><label>Import save<input id="importSave" type="file" accept="application/json" hidden></label><button id="toggleSound">Sound: ${state.settings.sound?'On':'Off'}</button><button id="resetProgress" class="danger">Reset progress</button></div>`;
  openSheet('Settings',html);
  $('exportSave').onclick=()=>{ const blob=new Blob([exportState(state)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='wordra-save.json'; a.click(); URL.revokeObjectURL(a.href); };
  $('importSave').onchange=async e=>{ const file=e.target.files?.[0]; if(!file)return; try{const text=await file.text(); const next=importState(text); Object.keys(state).forEach(k=>delete state[k]); Object.assign(state,next); startLevel(state.level,'campaign'); closeSheet(); toast('Save imported');}catch{toast('Could not import save');} };
  $('toggleSound').onclick=()=>{state.settings.sound=!state.settings.sound; save(); menuView();};
  $('resetProgress').onclick=()=>{if(confirm('Reset all local progress?')){localStorage.clear(); location.reload();}};
}
function eventView(){ const date=new Date(); const week=Math.ceil((((date - new Date(date.getFullYear(),0,1))/86400000)+new Date(date.getFullYear(),0,1).getDay()+1)/7); openSheet('Weekly Event',`<div class="event-hero">🏆 <b>Word Sprint</b><span>Week ${week}</span></div><p class="sheet-note">Finish the generated event board for points. This prototype keeps the leaderboard on your device.</p><div class="leaderboard"><div><span>1. You</span><b>${state.eventScore||0}</b></div><div><span>2. Alex</span><b>${Math.max(0,(state.eventScore||0)-35)}</b></div><div><span>3. Sam</span><b>${Math.max(0,(state.eventScore||0)-70)}</b></div></div><button class="primary wide" id="playEvent">Play event</button>`); $('playEvent').onclick=()=>{startLevel(1,'event');closeSheet();}; }

$('nextButton').onclick=()=>startLevel(activeLevel+1,mode);
$('restartButton').onclick=()=>game.reset(true);
$('hintButton').onclick=()=>{ if(state.coins<CONFIG.hintCost){toast('Not enough coins');return;} const word=game.hint(); if(!word)return; state.coins-=CONFIG.hintCost; state.hintsUsed++; save(); renderHeader(); toast(`Hint: ${word}`); };
$('levelsButton').onclick=levelsView; $('profileButton').onclick=profileView; $('menuBtn').onclick=menuView; $('closeSheet').onclick=closeSheet; $('dailyButton').onclick=()=>{const day=new Date().getUTCDate()+new Date().getUTCMonth()*31; startLevel(10000+day,'daily');}; $('eventButton').onclick=eventView;
$('sheet').addEventListener('click',e=>{if(e.target.id==='sheet')closeSheet();});

game=new GameController({boardEl,wordListEl,onUpdate:syncUI,onToast:toast});
startLevel(activeLevel,'campaign');

if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
