import React from 'react';

// import styled from 'styled-components';
import styled from 'styled-components/macro';

import { usePoke } from './PokeContext';

const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PokeInfo = () => {
	const { poke } = usePoke();
	return (
		<Container>
			{poke ? (
				<img
					alt={poke.name}
					css="max-width: 100%"
					src={`${url}${poke.dex}.png`}
				/>
			) : null}
		</Container>
	);
};

export default PokeInfo;
