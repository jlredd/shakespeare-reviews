import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Page from './Page';
import Pagination from './Pagination';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Reviews = () => {
  const classes = useStyles();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);
  const [filterByRating, setFilterByRating] = useState(null);

  // Gets Reviews
  useEffect(() => {
    setLoading(true);

    axios.get(`https://shakespeare.podium.com/api/reviews`, {headers: {'x-api-key': process.env.REACT_APP_X_API_KEY}})
    .then(res => {
      setReviews(res.data);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  let currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  let filteredReviews = [];
  let totalReviewsLength = reviews.length;
  
  if(filterByRating){
    filteredReviews = reviews.filter(review => filterByRating === Math.ceil(review.rating))
    currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
    // currentReviews = currentReviews;
    totalReviewsLength = filteredReviews.length;
    console.log(totalReviewsLength);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  
  return (
    <Box className={classes.mainContainer}>
      <Page 
        reviews={currentReviews} 
        loading={loading} 
        setReviewsPerPage={setReviewsPerPage} 
        setFilterByRating={setFilterByRating} 
        reviewsPerPage={reviewsPerPage} 
        filterByRating={filterByRating} 
        paginate={paginate} />
      {
        loading 
        ?   
        null 
        : 
        <Button 
          onClick={() => window.scrollTo({top: 0, bottom: 0, behavior: 'smooth'})}>
            Back to top
        </Button>
      }
      <Pagination 
        reviewsPerPage={reviewsPerPage} 
        totalReviews={totalReviewsLength} 
        paginate={paginate} 
        currentPage={currentPage} 
        loading={loading} />
    </Box>
  )
}

export default Reviews

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))