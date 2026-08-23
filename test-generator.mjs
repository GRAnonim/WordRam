import {generateLevel,validateLevel,canTrace} from "./generator.js";
let ok=0;
for(let i=1;i<=300;i++){
  const level=generateLevel(i);
  if(!validateLevel(level)) throw new Error(`Level ${i} invalid`);
  for(const word of level.targets) if(!canTrace(level.board,word)) throw new Error(`${word} missing on ${i}`);
  ok++;
}
console.log(`OK: ${ok} levels validated`);
