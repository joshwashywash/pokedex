import React, { useContext } from 'react';

import { ThemeProvider as TP, ThemeContext } from 'styled-components';

const theme = {
	purple: '#7c3f58',
	red: '#eb6b6f',
	orange: '#f9a875',
	yellow: '#fff6d3'
};

const ThemeProvider = ({ children }) => <TP theme={theme}>{children}</TP>;

const useTheme = () => {
	return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
