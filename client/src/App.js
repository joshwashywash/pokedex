import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import theme from './theme';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, Gallery} from './components';

const client = new ApolloClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Gallery />
        </ApolloProvider>
      </>
    </ThemeProvider>
  );
}
