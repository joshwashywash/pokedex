import React from 'react';
import {createPortal} from 'react-dom';

import {Button} from './Button';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const BackButton = styled(Button)`
  margin: ${({theme: {spacing}}) => spacing};
`;

export const PopUp = ({hide}) =>
  createPortal(
    <Modal>
      <BackButton onClick={hide}>Close</BackButton>
    </Modal>,
    document.getElementById('root')
  );
