import assert from 'node:assert/strict';
import { generateLevel, validateLevel } from './generator.js';

for (const n of [1,2,10,49,50,100,250,500,750,1000,1234,9999]) {
  const level=generateLevel(n,'test');
  const report=validateLevel(level);
  assert.equal(report.ok,true,`Level ${n} invalid: ${report.errors.join('; ')}`);
  for(const t of level.targets){
    assert.equal(t.path.length,t.word.length);
    for(let i=1;i<t.path.length;i++) assert.equal(Math.abs(t.path[i][0]-t.path[i-1][0])+Math.abs(t.path[i][1]-t.path[i-1][1]),1);
  }
}
console.log('Wordra generator tests passed.');
