import React from 'react';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import './Gallery.css';

import Card from './Card.js';

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
        <div className="gallery">
          {pokemon.map(({name}, i) => (
            <Card name={name} number={1 + i} key={i} />
          ))}
        </div>
      )
    }
  </Query>
);

export default Gallery;
