import React from 'react';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

const Pokemon = () => (
  <Query
    query={gql`
      {
        pokemon {
          name
        }
      }
    `}
  >
    {({loading, error, data}) =>
      loading ? (
        'Loading...'
      ) : error ? (
        'Error :('
      ) : (
        <ol style={{listStyle: 'inside decimal'}}>
          {data.pokemon.map(({name}, i) => (
            <li key={i}>{`${name}`}</li>
          ))}
        </ol>
      )
    }
  </Query>
);

export {Pokemon};
