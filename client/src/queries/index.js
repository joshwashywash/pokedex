import {gql} from 'apollo-boost';

export const GET_ALL_POKEMON = gql`
  {
    pokemon {
      name
      dex
    }
  }
`;
