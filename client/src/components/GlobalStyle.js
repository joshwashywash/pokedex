import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: snow;
    color: ${({theme}) => theme.fg};
    font-family: 'Press Start 2P', 'cursive';
    padding: ${({theme}) => theme.spacing};
  }
`;
