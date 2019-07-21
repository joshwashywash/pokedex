import React from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Pokemon} from './queries';

const client = new ApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <Pokemon />
  </ApolloProvider>
);

export default App;
