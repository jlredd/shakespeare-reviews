import React from 'react';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/Nav';
import routes from './util/routes';
// import Reviews from './components/Reviews';

const App = () => {

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Nav />
          { routes }
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
