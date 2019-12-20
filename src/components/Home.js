import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Card className={classes.card}>
        <CardMedia 
          component='img' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg'
          className={classes.img} />
        </Card>
    </Box>
  )
}

export default Home

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  card: {
    width: '90%',

    marginTop: '5%'
  },
  img: {
    maxWidth: '100%'
  }
}))