import { createTheme, responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    gray: string;
    purple: string;
    darkPurple: string;
  }

  interface TypeText {
    darkPurple: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#98A3FF',
      light: '#98A3FF30',
    },
    error: {
      main: '#BB0D02',
    },
    warning: {
      main: '#E8AB64',
    },
    success: {
      main: '#007B23',
    },
    common: {
      gray: '#A7A7AD',
      purple: '#583BD1',
      darkPurple: '#212135',
    },
    text: {
      darkPurple: '#130063',
    },
  },
  typography: {
    h1: {
      fontSize: '36px',
      fontFamily: 'Lato, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontSize: '32px',
      fontFamily: 'Lato, sans-serif',
    },
    h3: {
      fontSize: '20px',
      fontFamily: 'Lato, sans-serif',
    },
    subtitle1: {
      fontSize: '20px',
      fontFamily: 'Barlow, sans-serif',
    },
    h4: {
      fontSize: '16px',
      fontFamily: 'Barlow, sans-serif',
    },
  },
});

export default responsiveFontSizes(theme);
