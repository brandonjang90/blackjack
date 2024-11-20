import React from 'react';
import './Cards.css';

const Cards = ({ cards }) => {
  return (
    <div className="Cards">
      {cards.map(card => (
        <img
          key={card}
          src={`https://deckofcardsapi.com/static/img/${card}.png`}
          alt={card}
          className="Cards-img"
        />
      ))}
    </div>
  );
};

export default Cards;
