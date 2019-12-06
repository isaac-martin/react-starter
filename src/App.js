import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
import Base from './components/Base';
import Query from './components/Query';

import {Router} from '@reach/router';

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Base path="/" />
        <Query path="query" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
