import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

const Nav = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  // const [scrollingToView, setScrollingToView] = useState(false);

  const logo = 'Shakespeare';

  let prevScrollpos = window.pageYOffset;

  const scroll = () => {
    if (window.screen.availWidth > 1280) {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (document.getElementById("filterIcon")) {
          document.getElementById("filterIcon").style.top = 'calc(10vh + 32px)';
        }
      } else {
        document.getElementById("navbar").style.top = "-10vh";
        if (document.getElementById("filterIcon")) {
          document.getElementById("filterIcon").style.top = '32px';
        }
      }
      prevScrollpos = currentScrollPos;
    } else {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (document.getElementById("filterIcon")) {
          document.getElementById("filterIcon").style.top = 'calc(8vh + 16px)';
        }
      } else {
        document.getElementById("navbar").style.top = "-8vh";
        if (document.getElementById("filterIcon")) {
          document.getElementById("filterIcon").style.top = '16px';
        }
      }
      prevScrollpos = currentScrollPos;
    }
  }

  window.onscroll = scroll;

  const sideMenu = () => {
    return (
      <Box
        className={`${classes.sideMenu}`}
        role='presentation'
      >
        <List>
          <Link to='/' className={classes.link} onClick={() => setOpen(false)}>
            <ListItem button >
              <ListItemText disableTypography className={`${classes.sideMenuItems}`} >Home</ListItemText>
            </ListItem>
          </Link>
          <Link to='/reviews' className={classes.link} onClick={() => setOpen(false)}>
            <ListItem button >
              <ListItemText disableTypography className={`${classes.sideMenuItems}`} >Reviews</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    )
  }

  return (
    <Box className={classes.mainContainer} id='navbar'>
      <Typography variant='h3' className={`${classes.logo}`}>{logo}</Typography>
      <MenuIcon
        className={`${classes.menuIcon}`}
        onClick={() => setOpen(true)} />

      {/* Mobile Nav */}

      <SwipeableDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {sideMenu()}
      </SwipeableDrawer>

      {/* Desktop Nav */}

      <Box className={classes.desktopNavItemsContainer}>
        <Link to='/' className={classes.link}>
          <Button
            size='large'
          >
            Home
          </Button>
        </Link>
        <Link to='/reviews' className={classes.link}>
          <Button
            size='large'
          >
            Reviews
          </Button>
        </Link>

      </Box>
    </Box>
  )
}

export default Nav

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    height: '8vh',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '16px 16px 16px 0',

    position: 'sticky',
    top: 0,
    transition: 'top 0.3s',

    zIndex: 100,

    [theme.breakpoints.up('md')]: {
      paddingLeft: 32,
      paddingRight: 32
    },

    [theme.breakpoints.up('lg')]: {
      height: '10vh',

    }
  },
  logo: {
    padding: 16,
  },
  menuIcon: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  sideMenu: {
    backgroundColor: theme.palette.secondary.main,
    height: '100vh',
    width: 200,

    [theme.breakpoints.up('md')]: {
      width: 300
    }
  },
  sideMenuItems: {
    fontSize: theme.typography.h6.fontSize
  },
  desktopNavItemsContainer: {
    display: 'none',

    [theme.breakpoints.up('lg')]: {
      width: '35%',

      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
}))