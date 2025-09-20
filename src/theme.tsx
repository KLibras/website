import { createTheme, type Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    background: {
      default: '#F5F5DC'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Josefin Sans, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.1px'
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
    },
  },
});

export default theme;

