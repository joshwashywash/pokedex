import React, { useState, useContext } from 'react';

const PokemonContext = React.createContext();

const PokeProvider = ({ children }) => {
	const [poke, setPoke] = useState(null);
	return (
		<PokemonContext.Provider value={{ poke, setPoke }}>
			{children}
		</PokemonContext.Provider>
	);
};

const usePoke = () => {
	const context = useContext(PokemonContext);
	if (context === undefined)
		throw new Error('usePoke can only be used within a PokeProvider');
	return context;
};

export { PokeProvider, usePoke };
