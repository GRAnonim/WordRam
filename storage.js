const KEY="wordra-save-v2";
const defaults={level:1,coins:100,foundBonus:0,completed:[],settings:{sound:true,vibration:true}};
export function load(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch{return {...defaults}}}
export function save(s){localStorage.setItem(KEY,JSON.stringify(s))}
export function reset(){localStorage.removeItem(KEY);location.reload()}
