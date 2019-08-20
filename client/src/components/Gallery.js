import React from 'react';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {Button, Grid, PopUp} from './basic';
import {useToggle} from '../hooks';

export const Gallery = () => {
  const [showPopUp, toggle] = useToggle();
  const {loading, error, data} = useQuery(gql`
    {
      pokemon {
        name
      }
    }
  `);
  if (loading) return 'Loading';
  if (error) return 'Error :(';
  return (
    <div>
      <Grid>
        {data.pokemon.map(({name}, i) => (
          <Button onClick={toggle} key={i}>
            {name}
          </Button>
        ))}
      </Grid>
      {showPopUp && <PopUp hide={toggle} />}
    </div>
  );
};
