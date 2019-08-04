import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Banner from './components/Banner';
import Gallery from './components/Gallery';

const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <Banner title={'POKEDEX'} />
    <Gallery />
  </ApolloProvider>
);

export default App;
