import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor, textColor, contrastTextColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secundaryColor,
      contrastText: contrastTextColor,
    },
    text: {
        primary: {
            main: textColor,
        }
    }
  },
});

export default theme