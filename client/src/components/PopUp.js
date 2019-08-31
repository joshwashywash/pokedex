import React from 'react';
import {createPortal} from 'react-dom';

import {animated, useSpring} from 'react-spring';

import {Button, Modal} from './basic';

const AnimatedModal = animated(Modal);

export const PopUp = ({hide, poke}) => {
  const [fade, set] = useSpring(() => ({opacity: 0}));
  return createPortal(
    <AnimatedModal style={fade}>
      <img
        style={{maxWidth: '100%'}}
        alt={poke.name}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke.dex}.png`}
        onLoad={() => set({opacity: 1})}
      />
      <h1>{poke.name}</h1>
      <p>No. {poke.dex}</p>
      <Button onClick={hide}>Close</Button>
    </AnimatedModal>,
    document.getElementById('root')
  );
};
