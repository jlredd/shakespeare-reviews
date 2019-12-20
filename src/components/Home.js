import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      
    </Box>
  )
}

export default Home

const useStyles = makeStyles(theme => ({
  mainContainer: {

  }
}))