import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  // img sprite height + figcaption text height
  min-height: 76px;
`;

const Card = ({name, number}) => (
  <Figure>
    <img
      style={{objectFit: 'contain'}}
      src={`https://www.serebii.net/pokearth/sprites/yellow/${number
        .toString()
        .padStart(3, '0')}.png`}
      alt={name}
    />
    <figcaption>{name}</figcaption>
  </Figure>
);

export default Card;
