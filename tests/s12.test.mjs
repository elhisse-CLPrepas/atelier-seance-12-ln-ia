import test from 'node:test';
import assert from 'node:assert/strict';
import { DATA } from '../src/data.js';
import fs from 'node:fs';
import vm from 'node:vm';

function session(storage=new Map(),accept=true){
 const source=fs.readFileSync(new URL('../src/main.js',import.meta.url),'utf8').replace("import { DATA } from './data.js';",'').replace(/render\(\);\s*$/,'');
 const context=vm.createContext({DATA,localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},window:{addEventListener(){}},confirm:()=>accept});
 vm.runInContext(source,context);
 return code=>vm.runInContext(code,context);
}

test('la référence V1 et le marquage fictif survivent au rechargement',()=>{
 const storage=new Map();const run=session(storage);
 run('loadCase(3);v1Snapshot=guideV1();persist()');
 const reload=session(storage);
 assert.equal(reload('selectedCase'),3);
 assert.match(reload('v1Snapshot'),/FICTIVE/);
 assert.equal(reload('humanReviewed'),false);
});

test('refuser une démo préserve le travail et la V1',()=>{
 const run=session(new Map(),false);
 run("state.title='Travail personnel';v1Snapshot='V1 conservée'");
 assert.equal(run('loadCase(0)'),false);
 assert.equal(run('state.title'),'Travail personnel');
 assert.equal(run('v1Snapshot'),'V1 conservée');
});

test('les sources importées longues restent conservées',()=>{
 const storage=new Map();session(storage)("state.plan='x'.repeat(80000);persist()");
 assert.equal(session(storage)('state.plan.length'),80000);
});

test('diapositives numérotées et avec notes',()=>{assert.equal(DATA.slides.length,22);DATA.slides.forEach((x,i)=>{assert.equal(x.num,i+1);assert(x.note);assert.equal(x.points.length,4)})});
test('quatre cas pédagogiques fictifs avec trois étapes',()=>{assert.equal(DATA.cases.length,4);DATA.cases.forEach(x=>assert.equal(x.steps.length,3))});
test('quiz cohérent',()=>{assert.equal(DATA.quiz.length,10);DATA.quiz.forEach(x=>assert(x.answer>=0&&x.answer<x.options.length))});
test('flashcards non vides',()=>{assert.equal(DATA.flashcards.length,12);DATA.flashcards.forEach(x=>assert(x.q&&x.a))});
test('grille de validation humaine présente',()=>{assert.equal(DATA.checks.length,10);assert(DATA.checks.some(c=>c.includes('Version V1/V2')))});
