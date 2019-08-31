const fs = require('fs');

const pokemon = JSON.parse(fs.readFileSync(`${__dirname}/pokemon.json`));

module.exports = {
  Query: {
    pokemon() {
      return pokemon;
    },
    poke(_, {dex}) {
      return pokemon.find(poke => poke.dex === dex);
    }
  }
};
