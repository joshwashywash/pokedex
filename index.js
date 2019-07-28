const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const port = process.env.PORT || 3333;

server.listen({port}).then(({url}) => console.log(`Server ready at ${url}`));
