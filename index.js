const {ApolloServer} = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({app});

const port = process.env.PORT || 3333;

app.listen({port}, () => {
  console.log(`Server ready at http://localhost:${port}/graphql`);
});
