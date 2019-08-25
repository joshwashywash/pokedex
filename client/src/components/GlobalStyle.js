import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.fg};
    font-family: 'Press Start 2P', 'cursive';
    line-height: 1;
    padding: ${({theme}) => theme.spacing};
  }

  ul {
    list-style: none;
  }
`;
