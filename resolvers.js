const fs = require('fs');

const pokemon = JSON.parse(fs.readFileSync(`${__dirname}/pokemon.json`));

module.exports = {
  Query: {
    pokemon: (_, {begin, end}) =>
      begin && end ? pokemon.slice(begin, end) : pokemon
  }
};
