import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import reviewOne from '../assets/review_one.jpg';
import reviewTwo from '../assets/review_two.jpg';
import reviewThree from '../assets/review_three.jpg';
import reviewFour from '../assets/review_four.jpg';

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box component='img' src={reviewOne} className={`${classes.reviewImgOne} ${classes.reviewImg}`} />
      <Box component='img' src={reviewTwo} className={`${classes.reviewImgTwo} ${classes.reviewImg}`} />
      <Box component='img' src={reviewThree} className={`${classes.reviewImgThree} ${classes.reviewImg}`} />
      <Box component='img' src={reviewFour} className={`${classes.reviewImgFour} ${classes.reviewImg}`} />
      <Box component='img' src={reviewOne} className={`${classes.reviewImgFive} ${classes.reviewImg}`} />
      <Box component='img' src={reviewTwo} className={`${classes.reviewImgSix} ${classes.reviewImg}`} />
      <Box component='img' src={reviewThree} className={`${classes.reviewImgSeven} ${classes.reviewImg}`} />
      <Box component='img' src={reviewFour} className={`${classes.reviewImgEight} ${classes.reviewImg}`} />
      <Box component='img' src={reviewOne} className={`${classes.reviewImgNine} ${classes.reviewImg}`} />
      <Box component='img' src={reviewFour} className={`${classes.reviewImgTen} ${classes.reviewImg}`} />
      <Box component='img' src={reviewTwo} className={`${classes.reviewImgEleven} ${classes.reviewImg}`} />
      <Box component='img' src={reviewOne} className={`${classes.reviewImgTwelve} ${classes.reviewImg}`} />
      <Card className={classes.card}>
        <CardMedia 
          component='img' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg'
          className={classes.img} />
        </Card>
      <Link to='/reviews'>
        <Button size='large' variant='contained' className={classes.button}>
          See the Reviews
        </Button>
      </Link>
    </Box>
  )
}

export default Home

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    maxHeight: '82vh',

    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    opacity: 0,
    width: '90%',
    position: 'absolute',

    top: '25%',

    animation: '$fade-in .4s ease-out forwards',
    animationDelay: '1.8s',

    [theme.breakpoints.up('md')]: {
      width: '80%',
      top: '15%'
    },

    [theme.breakpoints.up('lg')]: {
      width: '30%',
      top: '15%'
    }
  },
  img: {
    maxWidth: '100%',
  },
  '@keyframes slide-in-bottom': {
    '0%': {
      opacity: 0,
      transform: 'translateY(100%)'
    },

    '50%': {
      transform: 'translateY(-50%)'
    },
    
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes slide-in-right': {
    '0%': {
      opacity: 0,
      transform: 'translateX(100%)'
    },

    '50%': {
      transform: 'translateX(-50%)'
    },
    
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  },
  '@keyframes slide-in-left': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-100%)'
    },

    '50%': {
      transform: 'translateX(50%)'
    },
    
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  },
  '@keyframes slide-in-top': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-100%)'
    },

    '50%': {
      transform: 'translateY(50%)'
    },
    
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes fade-in': {
    '0%': {
      opacity: 0,
    },
    
    '100%': {
      opacity: 1,
    }
  },
  reviewImg: {
    border: '1px solid black'
  },
  reviewImgOne: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    
    animation: '$slide-in-left .75s ease-out forwards',

    [theme.breakpoints.up('md')]: {
      top: '21%',
      left: '5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '20%',
      left: '20%',
      // width: '30%'
    }
  },
  reviewImgTwo: {
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '5%',

    animation: '$slide-in-top .65s ease-out forwards',
    animationDelay: '.15s',

    [theme.breakpoints.up('md')]: {
      top: '54%',
      left: '5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '53%',
      left: '20%'
    }
  },
  reviewImgThree: {
    opacity: 0,
    position: 'absolute',
    top: '45%',
    left: 0,

    animation: '$slide-in-right .55s ease-out forwards',
    animationDelay: '.3s',

    [theme.breakpoints.up('md')]: {
      top: '70%',
      left: '2%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '64%',
      left: '58%'
    }
  },
  reviewImgFour: {
    opacity: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,

    animation: '$slide-in-bottom .45s ease-out forwards',
    animationDelay: '.45s',

    [theme.breakpoints.up('md')]: {
      top: '85%',
      left: '30%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '66.5%',
      left: '23%'
    }
  },
  reviewImgFive: {
    opacity: 0,
    position: 'absolute',
    bottom: '10%',
    left: -100,

    animation: '$slide-in-top .35s ease-out forwards',
    animationDelay: '.6s',

    [theme.breakpoints.up('md')]: {
      top: '77%',
      left: '5.5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '71%',
      left: '50%'
    }
  },
  reviewImgSix: {
    opacity: 0,
    position: 'absolute',
    top: '10%',
    right: '2%',

    animation: '$slide-in-right .25s ease-out forwards',
    animationDelay: '.75s',

    [theme.breakpoints.up('md')]: {
      top: '9%',
      left: '60%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '12%',
      left: '50%'
    }
  },
  reviewImgSeven: {
    opacity: 0,
    position: 'absolute',
    bottom: '20%',
    right: '1%',

    animation: '$slide-in-left .15s ease-out forwards',
    animationDelay: '.9s',

    [theme.breakpoints.up('md')]: {
      top: '66%',
      left: '65%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '38%',
      left: '27%'
    }
  },
  reviewImgEight: {
    opacity: 0,
    position: 'absolute',
    top: '40%',
    left: -50,

    animation: '$slide-in-bottom .15s ease-out forwards',
    animationDelay: '1.05s',

    [theme.breakpoints.up('md')]: {
      top: '45%',
      left: '3.5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '20%',
      left: '60%'
    }
  },
  reviewImgNine: {
    opacity: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,

    animation: '$slide-in-right .15s ease-out forwards',
    animationDelay: '1.2s',

    [theme.breakpoints.up('md')]: {
      top: '77%',
      left: '60%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '73%',
      left: '34%'
    }
  },
  reviewImgTen: {
    opacity: 0,
    position: 'absolute',
    bottom: '60%',
    right: 3,

    animation: '$slide-in-right .15s ease-out forwards',
    animationDelay: '1.35s',

    [theme.breakpoints.up('md')]: {
      top: '30%',
      left: '60%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '34%',
      left: '52%'
    }
  },
  reviewImgEleven: {
    opacity: 0,
    position: 'absolute',
    bottom: '40%',
    right: 5,

    animation: '$slide-in-right .15s ease-out forwards',
    animationDelay: '1.5s',

    [theme.breakpoints.up('md')]: {
      top: '45%',
      left: '63.5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '13%',
      left: '33%'
    }
  },
  reviewImgTwelve: {
    opacity: 0,
    position: 'absolute',
    top: 150,
    left: -70,
    
    animation: '$slide-in-left .15s ease-out forwards',
    animationDelay: '1.65s',

    [theme.breakpoints.up('md')]: {
      top: '10%',
      left: '7%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '40%',
      left: '57%'
    }
  },
  button: {
    position: 'absolute',

    fontFamily: "'Girassol', cursive",

    top: '65%',
    left: '30%',
    opacity: 0,
    animation: '$slide-in-top 1.5s ease-out forwards',
    animationDelay: '1.8s',

    fontWeight: 'bolder',

    [theme.breakpoints.up('md')]: {
      top: '75%',
      left: '42.5%'
    },

    [theme.breakpoints.up('lg')]: {
      top: '70%',
      left: '45%',
      fontSize: 24
    }
  },
}))