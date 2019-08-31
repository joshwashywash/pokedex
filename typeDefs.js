const {gql} = require('apollo-server');

module.exports = gql`
  type Pokemon {
    "Defines the Pokemon."
    dex: ID!
    name: String!
    types: [String!]!
  }

  type Query {
    "Returns a list of all the Pokemon."
    pokemon: [Pokemon!]!
    "Returns a single Pokemon's information."
    poke(dex: ID!): Pokemon
  }
`;
