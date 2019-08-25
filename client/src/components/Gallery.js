import React, {useState} from 'react';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {Button, Grid} from './basic';
import {PopUp} from './PopUp';

export const Gallery = () => {
  const [showPopUp, toggle] = useState(false);
  const [poke, setPoke] = useState(null);
  const flip = () => toggle(s => !s);
  const {loading, error, data} = useQuery(gql`
    {
      pokemon {
        name
        dex
      }
    }
  `);
  return loading ? (
    'Loading...'
  ) : error ? (
    'Error :('
  ) : (
    <>
      <Grid as="ul">
        {data.pokemon.map((poke, i) => (
          <li key={i}>
            <Button
              style={{width: '100%'}}
              onClick={() => {
                setPoke(poke);
                flip();
              }}
            >
              {poke.name}
            </Button>
          </li>
        ))}
      </Grid>
      {showPopUp && <PopUp hide={flip} poke={poke} />}
    </>
  );
};
