import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Rating from '@material-ui/lab/Rating';

import FilterIcon from './FilterIcon';

import { shortenText, readableDate } from '../util/functions';

const Page = ({ reviews, loading, setReviewsPerPage, setFilterByRating, reviewsPerPage, filterByRating, paginate }) => {
  const classes = useStyles();

  const [showReviews, setShowReviews] = useState([]);
  const [backgroundColors, setBackgroundColors] = useState([]);


  // Loops over reviews after they are fetched and adds an index to showReviews for every review
  useEffect(() => {
    const blankReview = { showFullReview: false, review: '' };
    let newShowReviews = [];
    const addReview = (review) => {
      newShowReviews = [...newShowReviews, { ...blankReview, review }];
      setShowReviews(newShowReviews);
    };

    if (!loading) {
      for (let i = 0; i < reviews.length; i++) {
        addReview(reviews[i].body);
      }
    }
  }, [loading, reviews])

  // If an expand more icon is clicked, this function handles that event and marks the specific review as full view, rather than being shortened.
  const handleShowReviewChange = (e) => {
    const targetName = e.target.name ? e.target.name : e.target.parentElement.name ? e.target.parentElement.name : e.target.parentElement.parentElement.name ? e.target.parentElement.parentElement.name : e.target.parentElement.parentElement.parentElement.name;

    const updatedShowReviews = [...showReviews];

    updatedShowReviews[targetName].showFullReview = !updatedShowReviews[targetName].showFullReview;

    if (updatedShowReviews[targetName].showFullReview) {
      updatedShowReviews[targetName].review = reviews[targetName].body;
      setShowReviews(updatedShowReviews);
      return;
    }

    shortenText(updatedShowReviews[targetName].review);

    setShowReviews(updatedShowReviews);
  };

  // Generates a random color to be used for Avatar background if there is no image.
  useEffect(() => {
    const randomColor = () => {  
      const backgroundColorsCopy = [];
  
      for(let i = 0; i < reviews.length; i++){
        const randomNumber = Math.random();
    
        if (randomNumber < .2) {
          backgroundColorsCopy.push(classes.red);
        } else if (randomNumber < .4) {
          backgroundColorsCopy.push(classes.blue);
        } else if (randomNumber < .6) {
          backgroundColorsCopy.push(classes.orange);
        } else if (randomNumber < .8) {
          backgroundColorsCopy.push(classes.purple);
        }
        setBackgroundColors(backgroundColorsCopy);
      }
    }
    randomColor();
  }, [reviews, classes.red, classes.blue, classes.orange, classes.purple])

  // Renders a loading animation while fetching data in parent component.
  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    )
  }

  return (
    <>
      <FilterIcon 
        setReviewsPerPage={setReviewsPerPage} 
        setFilterByRating={setFilterByRating} 
        reviewsPerPage={reviewsPerPage} 
        filterByRating={filterByRating} 
        paginate={paginate} />
      <List className={classes.list}>
        {reviews.map((review, i) => (
          <ListItem key={i}>
            <Card className={classes.listItem}>
              <CardHeader
                avatar={
                  <Avatar className={backgroundColors[i]}>{review.author[0]}</Avatar>
                }
                title={review.author}
                className={classes.pdtb8}
              />
              <CardContent className={classes.pdtb8}>
                <Box className={classes.starsDateContainer}>
                  <Rating readOnly value={Math.ceil(review.rating)} precision={1} size='small' />
                  <Typography variant='body2' className={classes.mgl16}>{readableDate(review.publish_date)}</Typography>
                </Box>
                <Typography
                  className={clsx(classes.expand, {
                    [classes.gradualShow]: showReviews[i] ? showReviews[i].showFullReview : null,
                  })}
                >
                  {showReviews[i] && showReviews[i].showFullReview ?
                    showReviews[i].review
                    :
                    showReviews[i] ?
                      shortenText(showReviews[i].review)
                      :
                      null}
                </Typography>
              </CardContent>
              {showReviews[i] && showReviews[i].review.length >= 100 ?
                <CardActions className={classes.pd0}>
                  <IconButton
                    name={i}
                    onClick={e => {
                      handleShowReviewChange(e)
                    }}
                    className={clsx(classes.expand, classes.pdtb8, {
                      [classes.expandOpen]: showReviews[i] ? showReviews[i].showFullReview : null,
                    })}
                  >
                    <ExpandMoreIcon name={i} />
                  </IconButton>
                </CardActions>
                : null}
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default Page;

const useStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.up('md')]: {
      width: '65%'
    }
  },
  listItem: {
    width: '100%',
    minHeight: '5vh',
  },
  red: {
    backgroundColor: '#DC5555'
  },
  blue: {
    backgroundColor: '#5575DC'
  },
  orange: {
    backgroundColor: '#DCA255'
  },
  purple: {
    backgroundColor: '#A455DC'
  },
  starsDateContainer: {
    width: '100%',

    display: 'flex',
    alignItems: 'center'
  },
  mgl16: {
    marginLeft: 16
  },
  pdtb8: {
    paddingTop: 8,
    paddingBottom: 8
  },
  pd0: {
    padding: 0
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  gradualShow: {

  }
}))