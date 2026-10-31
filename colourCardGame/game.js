'use strict';
const E=ColourCards, $=id=>document.getElementById(id);
let state=null, wins=[0,0], round=0;
const pipLayouts={
  2:[[30,12],[30,78]],
  3:[[30,12],[30,45],[30,78]],
  4:[[12,12],[48,12],[12,78],[48,78]],
  5:[[12,12],[48,12],[30,45],[12,78],[48,78]],
  6:[[12,12],[48,12],[12,45],[48,45],[12,78],[48,78]],
  7:[[12,12],[48,12],[30,28],[12,45],[48,45],[12,78],[48,78]],
  8:[[12,12],[48,12],[30,28],[12,45],[48,45],[30,62],[12,78],[48,78]],
  9:[[12,12],[48,12],[12,34],[48,34],[30,45],[12,56],[48,56],[12,78],[48,78]],
  10:[[12,12],[48,12],[30,23],[12,34],[48,34],[12,56],[48,56],[30,67],[12,78],[48,78]]
};
function cardFace(c) {
  if(c.rank<=10) return `<svg class="number-pips" viewBox="0 0 60 90" aria-hidden="true">${pipLayouts[c.rank].map(([x,y])=>`<text x="${x}" y="${y}" dominant-baseline="central" text-anchor="middle"${y>45?` transform="rotate(180 ${x} ${y})"`:''}>${E.symbols[c.suit]}</text>`).join('')}</svg>`;
  return `<span class="face-letter" aria-hidden="true">${E.rank(c)}</span>`;
}
function card(c, action, selected=false, disabled=false) {
  const el=document.createElement(action?'button':'div');
  el.className='card '+(['hearts','diamonds'].includes(c.suit)?'red':'black')+(selected?' selected':'');
  el.innerHTML=`<span class="corner">${E.rank(c)}<small>${E.symbols[c.suit]}</small></span>${cardFace(c)}<span class="corner bottom">${E.rank(c)}<small>${E.symbols[c.suit]}</small></span>`;
  el.setAttribute('aria-label',`${E.rank(c)} of ${c.suit}`);
  if(action) { el.disabled=disabled; el.onclick=action; if(state.phase==='discard')el.setAttribute('aria-pressed',String(selected)); }
  return el;
}
function button(text, action, secondary=false, disabled=false) {
  const b=document.createElement('button'); b.className=secondary?'button secondary':'button'; b.textContent=text;b.onclick=action;b.disabled=disabled;$('actions').append(b);
}
function say(phase,message,hint) { $('phase').textContent=phase;$('message').textContent=message;$('hint').textContent=hint; }
function start(chooser) {
  const first=chooser===undefined; chooser=first?(Math.random()<0.5?0:1):chooser;
  const stock=E.deck(); const hands=[[],[]];hands[chooser]=stock.splice(0,5);hands[1-chooser]=stock.splice(0,5);
  state={chooser,stock,hands,score:[0,0],trump:null,phase:first?'coin':'suit',selected:new Set(),lead:null,played:[],last:'',first};round++;
  render();
}
function choose(suit) { state.trump=suit;state.phase='discard';render(); }
function discard() {
  state.hands[0]=state.hands[0].filter(c=>state.selected.has(c.id));
  const count=state.chooser===1?3:2;
  state.hands[1].sort((a,b)=>E.value(b,state.trump)-E.value(a,state.trump));state.hands[1].splice(-count);
  state.drawTurn=state.chooser;nextDraw();
}
function botDraw() {
  const a=state.stock.shift(),b=state.stock.shift();
  state.hands[1].push(E.value(a,state.trump)>=10+(Math.random()*5)?a:b);
}
function nextDraw() {
  if(state.drawTurn===1 && state.stock.length) { botDraw();state.drawTurn=0; }
  if(!state.stock.length) { state.phase='ready';render();return; }
  state.offered=state.stock.shift();state.phase='draw';render();
}
function draw(keep) {
  if(state.phase!=='draw')return;
  const second=state.stock.shift();state.hands[0].push(keep?state.offered:second);
  state.reveal=second;state.kept=keep;state.phase='reveal';render();
}
function beginPlay() {state.phase='play';state.turn=state.chooser;render();if(state.turn===1)scheduleBot();}
function scheduleBot() {const current=state;setTimeout(()=>{if(state!==current||state.phase!=='play'||state.turn!==1)return;play(1,E.pick(state.hands[1],state.lead,state.trump));},650);}
function play(player,c) {
  if(state.phase!=='play'||state.turn!==player||!E.legal(state.hands[player],state.lead).some(x=>x.id===c.id))return;
  state.hands[player]=state.hands[player].filter(x=>x.id!==c.id);state.played.push({player,card:c});
  if(!state.lead) {state.lead=c;state.turn=1-player;render();if(state.turn===1)scheduleBot();return;}
  const winner=E.beats(c,state.lead,state.trump)?player:1-player;state.score[winner]++;state.trickWinner=winner;
  state.phase='trick';render();
}
function nextTrick() {
  const winner=state.trickWinner;
  state.last=`${winner===0?'You':'Opponent'} won: `+state.played.map(x=>E.rank(x.card)+E.symbols[x.card.suit]).join(' · ');
  if(state.score[winner]===7) {wins[winner]++;state.phase='over';render();return;}
  state.played=[];state.lead=null;state.turn=winner;state.phase='play';render();if(winner===1)scheduleBot();
}
function render() {
  const s=state;$('arena').replaceChildren();$('actions').replaceChildren();$('hand').replaceChildren();
  $('you-score').textContent=s.score[0];$('bot-score').textContent=s.score[1];$('trump').textContent=s.trump?`Chosen shape: ${E.symbols[s.trump]} ${s.trump}`:'Shape not chosen yet';
  $('bot-count').textContent=`· ${s.hands[1].length} cards`;$('hand-count').textContent=`· ${s.hands[0].length}`;$('last').textContent=s.last;
  $('record').textContent=`Round ${round} · Wins: you ${wins[0]} / opponent ${wins[1]}`;
  $('hand-tip').textContent=s.phase==='discard'?'Tap cards to keep':s.phase==='play'&&s.turn===0?'Tap a card to play':'';
  const options=E.legal(s.hands[0],s.lead);
  [...s.hands[0]].sort((a,b)=>E.suits.indexOf(a.suit)-E.suits.indexOf(b.suit)||b.rank-a.rank).forEach(c=>{
    const enabled=s.phase==='discard'||(s.phase==='play'&&s.turn===0&&options.some(x=>x.id===c.id));
    $('hand').append(card(c,()=>{if(s.phase==='discard'){s.selected.has(c.id)?s.selected.delete(c.id):s.selected.size<(s.chooser===0?2:3)&&s.selected.add(c.id);render();}else play(0,c);},s.selected.has(c.id),!enabled));
  });
  if(s.phase==='coin') {
    say('COIN FLIP',s.chooser===0?'Heads. You choose!':'Tails. Opponent chooses.','The winner of this flip picks the first chosen shape.');
    $('arena').innerHTML=`<div class="coin">${s.chooser===0?'H':'T'}</div>`;
    button('Continue',()=>{s.phase='suit';render();});
  }else if(s.phase==='suit') {
    if(s.chooser===1) { const suit=E.chooseSuit(s.hands[1]);say('OPPONENT’S CHOICE',`Chosen shape: ${E.symbols[suit]} ${suit[0].toUpperCase()+suit.slice(1)}.`, 'This shape beats other shapes. Match the shape of the first card if you can.');button('Continue',()=>choose(suit)); }
    else {say('YOUR CHOICE','Pick a shape.','Look at your five cards, then choose a shape.');E.suits.forEach(suit=>button(`${E.symbols[suit]} ${suit[0].toUpperCase()+suit.slice(1)}`,()=>choose(suit),true));}
  }else if(s.phase==='discard') {
    const n=s.chooser===0?2:3;say('CHOOSE YOUR CARDS',`Pick ${n} cards to keep.`,`${s.selected.size} of ${n} selected. The other cards will be put aside.`);button('Keep these cards',discard,false,s.selected.size!==n);
  }else if(s.phase==='draw') {
    say('BUILD YOUR HAND','Keep this card?',`Keep this card, or take the next one unseen. ${13-s.hands[0].length} more to collect.`);$('arena').append(card(s.offered));button('Keep card',()=>draw(true));button('Take next',()=>draw(false),true);
  }else if(s.phase==='reveal') {
    say('NEXT CARD',s.kept?'This card is put aside.':'Your new card.',s.kept?'You kept the first card. This second card is put aside.':'You skipped the first card, so you keep this one.');$('arena').append(card(s.reveal));button('Continue',()=>{s.drawTurn=1;nextDraw();});
  }else if(s.phase==='ready') {
    say('ALL SET','Win 7 card pairs.',`${s.chooser===0?'You play':'Opponent plays'} first. A is the highest card.`);button('Start playing',beginPlay);
  }else if(s.phase==='play'||s.phase==='trick') {
    say('THE TABLE',s.phase==='trick'?(s.trickWinner===0?'You won this pair.':'Opponent won this pair.'):(s.turn===0?'Your move.':'Opponent is thinking…'),s.phase==='trick'?'The winner plays first next time.':s.lead?`Play ${s.lead.suit} if you have any. Otherwise, play any card.`:'Play any card.');
    s.played.forEach(p=>{const slot=document.createElement('div');slot.className='played';const label=document.createElement('small');label.textContent=p.player===0?'YOU':'OPPONENT';slot.append(label,card(p.card));$('arena').append(slot);});
    if(s.phase==='trick')button(s.score[s.trickWinner]===7?'See result':'Next pair',nextTrick);
  }else if(s.phase==='over') {
    say('ROUND COMPLETE',s.trickWinner===0?'You won!':'Opponent won.',`${s.trickWinner===0?'You':'Opponent'} won ${s.score[s.trickWinner]}–${s.score[1-s.trickWinner]} and ${s.trickWinner===0?'choose':'chooses'} the next chosen shape.`);button('Play again',()=>start(s.trickWinner));
  }
}
$('help').onclick=()=>$('rules').showModal();$('close-help').onclick=()=>$('rules').close();
for(let i=0;i<18;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${3+Math.random()*4}s` ;document.querySelector('.sparkles').append(s);}
button('Play',()=>start());

const themeColours={green:'#102b27',pink:'#613147',purple:'#36284f',blue:'#203f60'};
for(const [name,colour] of Object.entries(themeColours)) {
  const b=document.createElement('button');
  b.className='theme-button';b.textContent=name[0].toUpperCase()+name.slice(1);
  b.style.setProperty('--swatch',colour);b.setAttribute('aria-pressed',String(name==='green'));
  b.onclick=()=>{
    document.body.dataset.theme=name;
    document.querySelector('meta[name="theme-color"]').setAttribute('content',colour);
    for(const other of $('theme-buttons').children)other.setAttribute('aria-pressed',String(other===b));
  };
  $('theme-buttons').append(b);
}
