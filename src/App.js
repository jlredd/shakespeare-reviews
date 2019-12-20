import React from 'react';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/Nav';
import routes from './util/routes';

import { makeStyles } from '@material-ui/core/styles';

const App = () => {
  const classes = useStyles();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div className={`App ${classes.mainContainer}`}>
          <CssBaseline />
          <Nav />
          { routes }
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;

const useStyles = makeStyles(theme => ({
  mainContainer: '100%'
}))
