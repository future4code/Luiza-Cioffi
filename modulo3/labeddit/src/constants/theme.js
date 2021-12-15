import { createMuiTheme } from '@material-ui/core/styles';
import { color1, color2, color3, color4 } from './colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color1,
      contrastText: color4,
    },
    text: {
        primary: 'black',
    },
    secondary: {
      light: color2,
      main: color3,
      
      contrastText: 'white',
    },
  },
});

