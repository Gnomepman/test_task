import { createTheme, responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
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
      main: '#B60100',
    },
    warning: {
      main: '#B65C00',
    },
    success: {
      main: '#006800',
    },
    common: {
      darkPurple: '#212135',
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    subtitle1: {},
    h4: {},
  },
});

export default responsiveFontSizes(theme);