import React from 'react';
import styled from 'styled-components';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Card from './Card';

const Grid = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  place-items: center;
`;

const Gallery = () => (
  <Query
    query={gql`
      query Pokemon($begin: Int, $end: Int) {
        pokemon(begin: $begin, end: $end) {
          name
        }
      }
    `}
    variables={{begin: null, end: null}}
  >
    {({loading, error, data: {pokemon}}) =>
      loading ? (
        'Loading...'
      ) : error ? (
        'Error :('
      ) : (
        <Grid>
          {pokemon.map(({name}, i) => (
            <Card
              name={name}
              number={(1 + i).toString().padStart(3, '0')}
              key={i}
            />
          ))}
        </Grid>
      )
    }
  </Query>
);

export default Gallery;
