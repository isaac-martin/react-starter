import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import Home from 'views/Home';

import {Router} from '@reach/router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
