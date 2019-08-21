import React, {useState} from 'react';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {Button, Grid, PopUp} from './basic';

export const Gallery = () => {
  const [showPopUp, toggle] = useState(false);
  const flip = () => toggle(s => !s);
  const {loading, error, data} = useQuery(gql`
    {
      pokemon {
        name
      }
    }
  `);
  return loading ? (
    'Loading...'
  ) : error ? (
    'Error :('
  ) : (
    <>
      {showPopUp && <PopUp hide={flip} />}
      <Grid>
        {data.pokemon.map(({name}, i) => (
          <Button onClick={flip} key={i}>
            {name}
          </Button>
        ))}
      </Grid>
    </>
  );
};
