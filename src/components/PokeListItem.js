import React from 'react';

import styled from 'styled-components';
import { usePoke } from './PokeContext';

const ListItem = styled.li`
	display: flex;
	justify-content: center;
	padding: 1em;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	&:hover {
		background: ${props => props.theme.orange};
	}
	&:active {
		background: ${props => props.theme.red};
	}
`;

const ListText = styled.p`
	user-select: none;
`;

const PokeListItem = ({ poke }) => {
	const { setPoke } = usePoke();
	return (
		<ListItem onClick={() => setPoke(poke)}>
			<ListText>{poke.name}</ListText>
		</ListItem>
	);
};

export default PokeListItem;
