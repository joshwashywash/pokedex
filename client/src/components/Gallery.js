import React from 'react';
import styled from 'styled-components';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Card from './Card.js';

const Grid = styled.div`
  display: grid;
  grid-gap: ${({theme}) => theme.spacing};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
            <Card name={name} number={1 + i} key={i} />
          ))}
        </Grid>
      )
    }
  </Query>
);

export default Gallery;
