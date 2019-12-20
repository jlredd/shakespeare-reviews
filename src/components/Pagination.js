import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Pagination = ({ reviewsPerPage, totalReviews, paginate, currentPage, loading }) => {
  const classes = useStyles();

  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPages = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
      totalPages.push(i);
    }

    setPageNumbers(totalPages);
  }, [reviewsPerPage, totalReviews])

  let frontDots = 0;
  let backDots = 0;

  if (loading) {
    return null;
  }

  return (
    <List className={classes.list}>
      <ChevronLeftIcon onClick={() => {
        if (currentPage !== 1) {
          const newPage = currentPage - 1;
          paginate(newPage)
        }
      }} />
      {pageNumbers.map((number, i) => {
        if (number === currentPage || (number >= (currentPage - 2) && number <= (currentPage + 2)) || number === 1 || number === pageNumbers[pageNumbers.length - 1]) {
          return (
            <ListItem
              key={i + 1}
              className={`${classes.listItem}`}
              onClick={() => paginate(number)} >
              <ListItemText className={`${classes.listItemText} ${currentPage === number ? classes.currentPage : null}`}>
                {number}
              </ListItemText>
            </ListItem>
          )
        }

        if (number > currentPage && frontDots < 3) {
          frontDots++
          return (
            <ListItem
              key={i + 1}
              className={classes.listItem} >
              <ListItemText className={classes.listItemText}>
                .
              </ListItemText>
            </ListItem>
          )
        } else if (number < currentPage && backDots < 3) {
          backDots++
          return (
            <ListItem
              key={i + 1}
              className={classes.listItem} >
              <ListItemText className={classes.listItemText}>
                .
                </ListItemText>
            </ListItem>
          )
        } else return null;
      })}
      <ChevronRightIcon onClick={() => {
        if (pageNumbers[pageNumbers.length - 1] !== currentPage) {
          const newPage = currentPage + 1;
          paginate(newPage)
        }
      }} />
    </List>
  )
}

export default Pagination;

const useStyles = makeStyles(theme => ({
  list: {
    width: '70%',

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      width: '45%'
    },

    [theme.breakpoints.up('lg')]: {
      width: '20%'
    }
  },
  listItem: {
    width: '10%',
    padding: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      cursor: 'pointer'
    }
  },
  listItemText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentPage: {
    // backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5
  }
}))