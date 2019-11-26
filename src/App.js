import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import Base from './components/Base';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Base />
    </ThemeProvider>
  );
};

export default App;
