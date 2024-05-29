import React, { useState } from 'react';
import '../index.css';

const PlayerCard = ({ name, team, imgSrc, position, height, weight }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className={`card__inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card__face card__face--front">
          <img src={imgSrc} alt={name} />
          <h3>{name}</h3>
          <p>{team}</p>
        </div>
        <div className="card__face card__face--back">
          <p>Position: {position}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
