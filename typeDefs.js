const {gql} = require('apollo-server');

module.exports = gql`
  type Pokemon {
    "Defines the Pokemon."
    name: String!
    types: [String!]!
  }

  type Query {
    "Returns a list of all the Pokemon."
    pokemon: [Pokemon!]!
  }
`;
