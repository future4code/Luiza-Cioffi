import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToHomePage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom';

const Header = () => {  

  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h3">
            iCasei
          </Typography>
          <Button onClick={() => goToHomePage(history)} color="inherit">Home</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;