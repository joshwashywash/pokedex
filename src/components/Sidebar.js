import React from 'react';

import styled from 'styled-components';

import { GET_POKEMON } from '../queries';
import { useQuery } from '@apollo/react-hooks';

import PokeListItem from './PokeListItem';

const Container = styled.div`
	align-self: stretch;
	overflow-y: scroll;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

const Sidebar = () => {
	const { loading, error, data } = useQuery(GET_POKEMON);
	if (loading) return null;
	if (error) return error.message;
	return (
		<Container>
			<List>
				{data.pokemon.map(poke => (
					<PokeListItem key={poke.dex} poke={poke} />
				))}
			</List>
		</Container>
	);
};

export default Sidebar;
