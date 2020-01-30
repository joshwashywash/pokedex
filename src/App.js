import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from './ThemeProvider';
import { PokeProvider } from './components/PokeContext';

import GlobalStyle from './GlobalStyle';

import Flex from './components/Flex';
import Sidebar from './components/Sidebar';
import PokeInfo from './components/PokeInfo';

const client = new ApolloClient({ uri: 'https://pokemonql.herokuapp.com/' });

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider>
				<>
					<GlobalStyle />
					<PokeProvider>
						<Flex>
							<Sidebar />
							<PokeInfo />
						</Flex>
					</PokeProvider>
				</>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
