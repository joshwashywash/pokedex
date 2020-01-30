import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.purple};
    font-family: 'Press Start 2P', 'cursive';
  }

  ::-webkit-scrollbar {
    background: ${props => props.theme.purple};
    width: 1em;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.orange};
  }
`;

export default GlobalStyle;
