import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme: {bg}}) => bg};
    color: ${({theme: {fg}}) => fg};
    font-family: 'Press Start 2P', 'cursive';
    line-height: 1;
    padding: ${({theme: {spacing}}) => spacing};
  }
`;
