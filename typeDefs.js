const {gql} = require('apollo-server');

module.exports = gql`
  type Pokemon {
    "Defines the Pokemon."
    dex: String!
    name: String!
    types: [String!]!
  }

  type Query {
    "Returns a list of all the Pokemon."
    pokemon: [Pokemon!]!
  }
`;
