import React from 'react';
import Cards from './Cards';

const CARD_VALUES = {
  'A': 11, // Ace
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10,
};

const DECK = [
  'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
  'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
  'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
  'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
];

const dealCards = () => {
  const shuffledDeck = [...DECK].sort(() => Math.random() - 0.5);
  const dealtCards = shuffledDeck.slice(0, 2);
  const score = dealtCards.reduce((acc, card) => {
    const cardValue = card.length === 3 ? card.slice(0, 2) : card[0]; // Handle "10" cards
    return acc + CARD_VALUES[cardValue];
  }, 0);
  return { cards: dealtCards, score };
};

const Blackjack = () => {
  const { cards, score } = dealCards();
  const blackjack = score === 21;

  return (
    <div>
      <h1>Blackjack</h1>
      <Cards cards={cards} />
      <h2>Score: {score}</h2>
      {blackjack && <h3>🎉🎉 BLACKJACK!!! 🎉🎉</h3>}
    </div>
  );
};

export default Blackjack;
