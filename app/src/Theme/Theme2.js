import { createTheme } from '@mui/material/styles';

export const theme2 = createTheme({
  palette: {
    primary: {
      light: '#596c60',
      main: '#304839',
      dark: '#213227',
      contrastText: '#ECE5DC',
    },
    secondary: {
      light: '#b58472',
      main: '#A3664F',
      dark: '#724737',
      contrastText: '#ECE5DC',
    },
    // Noir (non pur)
    third: {
        main: '#1E1F1C',
        contrastText: '#ECE5DC'
      },
    // Black cassé
    fourth: {
        main: '#ECE5DC',
        contrastText: '#1E1F1C'
    },
    background: {
      default: "#fffcf7"
    }
  },
  typography: {
    fontFamily: [
      'Bellefair',
    ].join(','),
  },
});
