import fs from 'node:fs';
import { DATA } from '../src/data.js';
import assert from 'node:assert/strict';
assert.equal(DATA.slides.length,22,'22 diapositives');
assert.equal(DATA.cases.length,4,'4 cas fictifs');
assert.equal(DATA.flashcards.length,12,'12 flashcards');
assert.equal(DATA.quiz.length,10,'10 questions');
assert.equal(DATA.checks.length,10,'10 critères');
assert(DATA.slides.every((x,i)=>x.num===i+1&&x.points.length===4&&x.note),'numérotation et notes');
assert(DATA.quiz.every(q=>q.options.length===3&&q.answer>=0&&q.answer<3),'choix quiz');
for(const file of ['index.html','src/main.js','src/style.css','prompts/PROMPT-MAITRE-CODEX-S12.md','AGENTS.md']){
 assert(fs.existsSync(file),`fichier requis: ${file}`);
}
const js=fs.readFileSync('src/main.js','utf8');
for(const label of ['guide-pratique-v1.md','guide-pratique-v2-a-relire.md','grille-relecture-s12.md','preuve-seance-12.md','bilan-module-03.md'])assert(js.includes(label),`export ${label}`);
console.log('Vérification S12 : 22 slides, 4 démos, 12 flashcards, 10 questions, 10 critères, exports OK');
