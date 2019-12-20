import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  // breakpoints: {

  // },
  // direction: ,
  // mixins: {

  // },
  // overrides: {

  // },
  palette: {
    // Lot of other options that aren't listed if I ever need them.
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#68B8DF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#DBDBDB',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    background: {
      // default: '#424242',
      // paper: 
    },
    // status: {
    //   danger: 'red',
    // },
  },
  // props: {

  // },
  // shadows: [

  // ],
  // shape: {

  // },
  // spacing: {

  // },
  // transitions: {

  // },
  // typography: {
    
  // },
  // zIndex: {

  // }
});

theme = responsiveFontSizes(theme);

export default theme;