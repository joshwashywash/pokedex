import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import theme from './theme';
import {ThemeProvider} from 'styled-components';

import Banner from './components/Banner';
import Gallery from './components/Gallery';

const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <Banner title={'POKEDEX'} />
        <Gallery />
      </>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
