import React from 'react';
import {createPortal} from 'react-dom';

import {animated as a, useSpring} from 'react-spring';

import {Button} from './basic/Button';
import styled from 'styled-components';

const Modal = styled(a.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.bg};
`;

export const PopUp = ({hide, poke}) => {
  const [fade, set] = useSpring(() => ({opacity: 0}));
  return createPortal(
    <Modal style={fade}>
      <ModalContent>
        <img
          alt={poke.name}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke.dex}.png`}
          onLoad={() => set({opacity: 1})}
        />
        <h1>{poke.name}</h1>
        <Button onClick={hide}>Close</Button>
      </ModalContent>
    </Modal>,
    document.getElementById('root')
  );
};
