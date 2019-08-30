import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import theme from './theme';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, Gallery} from './components';
import {Header, Footer} from './components/basic';

const client = new ApolloClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Header content={document.title} />
          <Gallery />
          <Footer content="Josh Oertel 2019" />
        </ApolloProvider>
      </>
    </ThemeProvider>
  );
}
