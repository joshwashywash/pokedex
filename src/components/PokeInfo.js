import React from 'react';

// import styled from 'styled-components';
import styled from 'styled-components/macro';

import { usePoke } from './PokeContext';

const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em;
`;

const PokeInfo = () => {
	const { poke } = usePoke();
	return poke ? (
		<Container>
			<img
				alt={poke.name}
				css="max-width: 100%"
				src={`${url}${poke.dex}.png`}
			/>
			<h1>{poke.name}</h1>
		</Container>
	) : null;
};

export default PokeInfo;
