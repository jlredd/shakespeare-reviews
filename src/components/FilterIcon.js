import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const FilterIcon = ({ setReviewsPerPage, setFilterByRating, reviewsPerPage, filterByRating, paginate }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleReviewsPerPage = (e) => {
    if(e.target.value){
      setReviewsPerPage(e.target.value);
      setAnchorEl(null);
    }
  }

  const handleFilterByRating = (e) => {
    if(e.target.value){
      if(e.target.value === filterByRating){
        setFilterByRating(null);
      } else {
        setFilterByRating(e.target.value);
      }
      paginate(1);
      setAnchorEl(null);
    }
  }

  return (
    <>
      <Fab className={classes.filterIcon} id='filterIcon' size='small' color='primary' onClick={e => handleClick(e)}>
      <FilterListIcon />
    </Fab>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography align='center' className={classes.menuSubHeader} variant='h6'>Reviews Per Page</Typography>
        <Box className={classes.displayFlex}>
          <MenuItem 
            className={ reviewsPerPage === 5 ? classes.current : null} 
            onClick={e => handleReviewsPerPage(e)} value={5}>
              5
          </MenuItem>
          <MenuItem 
            className={ reviewsPerPage === 10 ? classes.current : null} 
            onClick={e => handleReviewsPerPage(e)} value={10}>
              10
            </MenuItem>
          <MenuItem 
            className={ reviewsPerPage === 25 ? classes.current : null} 
            onClick={e => handleReviewsPerPage(e)} value={25} >
              25
          </MenuItem>
        </Box>
        <Divider />
        <Typography align='center' className={classes.menuSubHeader} variant='h6'>Ratings</Typography>
        <Box className={classes.displayFlex}>
          <MenuItem 
            className={ filterByRating === 1 ? classes.current : null} 
            onClick={e => handleFilterByRating(e)} value={1} >
              1
          </MenuItem>
          <MenuItem 
            className={ filterByRating === 2 ? classes.current : null} 
            onClick={e => handleFilterByRating(e)} value={2} >
              2
            </MenuItem>
          <MenuItem 
            className={ filterByRating === 3 ? classes.current : null} 
            onClick={e => handleFilterByRating(e)} value={3} >
            3
          </MenuItem>
          <MenuItem 
            className={ filterByRating === 4 ? classes.current : null} 
            onClick={e => handleFilterByRating(e)} value={4} >
            4
          </MenuItem>
          <MenuItem 
            className={ filterByRating === 5 ? classes.current : null} 
            onClick={e => handleFilterByRating(e)} value={5} >
            5
          </MenuItem>
        </Box>
      </Menu>
    </>
  )
}

export default FilterIcon

const useStyles = makeStyles(theme => ({
  filterIcon: {
    position: 'fixed',
    
    top: 'calc(8vh + 16px)',
    right: 16,
  
    zIndex: 10,
  
    transition: 'top 0.3s',
  
    [theme.breakpoints.up('lg')]: {
      top: 'calc(10vh + 32px)',
      right: 32
    }
  },
  menuSubHeader: {
    padding: 8
  },
  displayFlex: {
    display: 'flex',
    justifyContent: 'space-evenly'
    // flexDirection: 'column'
  },
  current: {
    // backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5
  }
}))