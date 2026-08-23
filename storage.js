const KEY="wordra-v2-save";
const DEFAULTS={level:1,coins:100,completed:{},bonusCount:0,settings:{sound:true,vibrate:true}};
function clone(x){return JSON.parse(JSON.stringify(x))}
function normalize(s){
  const out={...DEFAULTS,...s};
  out.completed=out.completed&&typeof out.completed==="object"?out.completed:{};
  out.settings={...DEFAULTS.settings,...(out.settings||{})};
  out.level=Math.max(1,Number(out.level)||1);
  out.coins=Math.max(0,Number(out.coins)||0);
  out.bonusCount=Math.max(0,Number(out.bonusCount)||0);
  return out;
}
window.WordraStorage={
 load(){try{return normalize(JSON.parse(localStorage.getItem(KEY)||"{}"))}catch{return clone(DEFAULTS)}},
 save(s){localStorage.setItem(KEY,JSON.stringify(s))},
 reset(){localStorage.removeItem(KEY);location.reload()}
};
