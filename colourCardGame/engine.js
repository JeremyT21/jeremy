(function (root) {
  'use strict';
  const suits = ['diamonds', 'clubs', 'spades', 'hearts'];
  const symbols = { diamonds: '♦', clubs: '♣', spades: '♠', hearts: '♥' };
  const rank = c => ({11:'J',12:'Q',13:'K',14:'A'}[c.rank] || String(c.rank));
  const deck = (rng = Math.random) => {
    const cards = suits.flatMap(suit => Array.from({length:13}, (_,i) => ({suit,rank:i+2,id:suit+(i+2)})));
    for (let i=cards.length-1;i>0;i--) { const j=Math.floor(rng()*(i+1)); [cards[i],cards[j]]=[cards[j],cards[i]]; }
    return cards;
  };
  const legal = (hand, lead) => lead && hand.some(c=>c.suit===lead.suit) ? hand.filter(c=>c.suit===lead.suit) : [...hand];
  const beats = (card, lead, trump) => card.suit===lead.suit ? card.rank>lead.rank : card.suit===trump;
  const value = (c,trump) => c.rank+(c.suit===trump?10:0);
  const chooseSuit = hand => [...suits].sort((a,b)=>hand.filter(c=>c.suit===b).reduce((s,c)=>s+c.rank+6,0)-hand.filter(c=>c.suit===a).reduce((s,c)=>s+c.rank+6,0))[0];
  function pick(hand, lead, trump, rng=Math.random) {
    const options=legal(hand,lead);
    if(rng()<0.22) return options[Math.floor(rng()*options.length)];
    const cheap=(a,b)=>value(a,trump)-value(b,trump);
    if(lead) return options.filter(c=>beats(c,lead,trump)).sort(cheap)[0] || options.sort(cheap)[0];
    return options.filter(c=>c.rank>=12).sort((a,b)=>b.rank-a.rank)[0] || options.sort(cheap)[0];
  }
  root.ColourCards={suits,symbols,rank,deck,legal,beats,value,chooseSuit,pick};
})(globalThis);
