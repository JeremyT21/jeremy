import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import './engine.js';
const E=globalThis.ColourCards;
const c=(suit,rank)=>({suit,rank,id:suit+rank});
test('standard deck has 52 unique cards',()=>{const d=E.deck();assert.equal(d.length,52);assert.equal(new Set(d.map(c=>c.id)).size,52);});
test('must follow suit, even when a trump could win',()=>{const hand=[c('clubs',2),c('hearts',14)];assert.deepEqual(E.legal(hand,c('clubs',10)),[hand[0]]);assert.equal(E.legal(hand,c('spades',10)).length,2);});
test('rank, trump and off-suit resolution',()=>{assert.ok(E.beats(c('clubs',14),c('clubs',13),'hearts'));assert.ok(E.beats(c('hearts',2),c('clubs',14),'hearts'));assert.ok(!E.beats(c('clubs',14),c('hearts',2),'hearts'));assert.ok(!E.beats(c('spades',14),c('clubs',2),'hearts'));});
test('thoughtful replies use cheapest winner or cheapest loss',()=>{assert.equal(E.pick([c('clubs',12),c('clubs',10),c('clubs',2)],c('clubs',9),'hearts',()=>.8).rank,10);assert.equal(E.pick([c('clubs',12),c('clubs',2)],c('clubs',14),'hearts',()=>.8).rank,2);});
test('1000 simulated rounds: draft size, legal AI, first to seven',()=>{
 for(let n=0;n<1000;n++){
  const chooser=n%2,stock=E.deck(),hands=[stock.splice(0,5),stock.splice(0,5)],trump=E.chooseSuit(hands[chooser]);
  hands[chooser].splice(0,3);hands[1-chooser].splice(0,2);
  let turn=chooser;
  while(stock.length){const a=stock.shift(),b=stock.shift();hands[turn].push(Math.random()<.5?a:b);turn=1-turn;}
  assert.deepEqual(hands.map(h=>h.length),[13,13]);assert.equal(new Set(hands.flat().map(c=>c.id)).size,26);
  let leader=chooser;const score=[0,0];
  while(Math.max(...score)<7){
   const a=E.pick(hands[leader],null,trump),other=1-leader,b=E.pick(hands[other],a,trump);
   assert.ok(E.legal(hands[other],a).includes(b));
   hands[leader].splice(hands[leader].indexOf(a),1);hands[other].splice(hands[other].indexOf(b),1);
   leader=E.beats(b,a,trump)?other:leader;score[leader]++;
  }
  assert.ok(score[0]+score[1]<=13);assert.equal(hands[0].length,hands[1].length);
 }
});
test('application flow completes drafts, rounds and winner-selected replay',()=>{
 const element=()=>({children:[],style:{setProperty(){}},append(...x){this.children.push(...x)},replaceChildren(){this.children=[]},setAttribute(){}});
 const nodes=new Map();const document={getElementById(id){if(!nodes.has(id))nodes.set(id,element());return nodes.get(id)},createElement:element,querySelector:()=>element()};
 const queue=[];const ctx=vm.createContext({document,Math,setTimeout(fn){queue.push(fn)}});
 for(const file of ['engine.js','game.js'])vm.runInContext(readFileSync(new URL(file,import.meta.url),'utf8'),ctx);
 const run=s=>vm.runInContext(s,ctx);
 for(let round=0;round<12;round++){
  if(round===0)run('start()');
  if(run('state.phase')==='coin')run("state.phase='suit';render()");
  run('choose(E.chooseSuit(state.hands[state.chooser]))');
  run('state.hands[0].slice(0,state.chooser===0?2:3).forEach(c=>state.selected.add(c.id));discard()');
  let steps=0;
  while(run('state.phase')!=='ready'){
   assert.ok(++steps<30);
   run('draw(Math.random()<.5)');run('state.drawTurn=1;nextDraw()');
  }
  assert.equal(run('state.hands[0].length'),13);assert.equal(run('state.hands[1].length'),13);assert.equal(run('state.stock.length'),0);
  run('beginPlay()');steps=0;
  while(run('state.phase')!=='over'){
   assert.ok(++steps<60);
   if(run('state.phase')==='trick')run('nextTrick()');
   else if(run('state.turn')===0)run('play(0,E.pick(state.hands[0],state.lead,state.trump))');
   else {assert.ok(queue.length);queue.shift()();}
  }
  const winner=run('state.trickWinner');assert.equal(run('state.score[state.trickWinner]'),7);
  run('start(state.trickWinner)');assert.equal(run('state.chooser'),winner);assert.equal(run('state.phase'),'suit');
 }
});
