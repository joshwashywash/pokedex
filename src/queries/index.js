import { gql } from 'apollo-boost';

export const GET_POKEMON = gql`
	{
		pokemon {
			dex
			name
		}
	}
`;

export const GET_POKE = gql`
	query Poke($dex: ID!) {
		poke(dex: $dex) {
			name
		}
	}
`;
