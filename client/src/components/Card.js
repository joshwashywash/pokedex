import React from 'react';

import './Card.css';

const Card = ({name, number}) => (
  <figure className="card">
    <img
      className="card__img"
      src={`https://www.serebii.net/pokearth/sprites/yellow/${number
        .toString()
        .padStart(3, '0')}.png`}
      alt={name}
    />
    <figcaption>{name}</figcaption>
  </figure>
);

export default Card;
