import React, {useState} from 'react';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {Button, Grid} from './basic';
import {PopUp} from './PopUp';

import styled from 'styled-components';

const P = styled.p`
  text-align: center;
`;

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
    <P>Loading...</P>
  ) : error ? (
    <P>Error :(</P>
  ) : (
    <>
      <Grid>
        {data.pokemon.map((poke, i) => (
          <Button
            key={i}
            onClick={() => {
              setPoke(poke);
              flip();
            }}
          >
            {poke.name}
          </Button>
        ))}
      </Grid>
      {showPopUp && <PopUp hide={flip} poke={poke} />}
    </>
  );
};
