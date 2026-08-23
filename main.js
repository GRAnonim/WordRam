// Wordra — полностью автономная сборка без модульных импортов.
// Все файлы находятся в корне репозитория для удобной загрузки с iPhone.
(function(){
  const boot=()=>{
    try{
      const game=new window.WordraGame(document.getElementById("app"));
      window.wordraGame=game;
      const original=game.render.bind(game);
      game.render=()=>{original();game.afterRender()};
      game.render();
      document.getElementById("soundToggle").checked=game.save.settings.sound;
      document.getElementById("vibrateToggle").checked=game.save.settings.vibrate;
      document.getElementById("soundToggle").onchange=e=>{game.save.settings.sound=e.target.checked;window.WordraStorage.save(game.save)};
      document.getElementById("vibrateToggle").onchange=e=>{game.save.settings.vibrate=e.target.checked;window.WordraStorage.save(game.save)};
    }catch(err){
      console.error(err);
      document.getElementById("screen").innerHTML='<section class="list-card"><div class="section-title">Не удалось запустить игру</div><p class="muted">Обновите страницу. Если ошибка повторяется, пришлите скриншот.</p></section>';
    }
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
