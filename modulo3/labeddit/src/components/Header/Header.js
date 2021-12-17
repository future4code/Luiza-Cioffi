import React, { useState } from 'react';
import { StyledToolBar } from "./Styled"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from '../../routes/coordinators';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Header = () => {
    
  const history = useHistory()

  

  const logout = () => {localStorage.removeItem("token")}

  const loginButtonChange = () => {
    if (token){
      logout()
      setLoginButton('Login')
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolBar> 
          <Button onClick={() => goToFeed(history)} color="inherit" >LabEddit</Button>
          <Button onClick={loginButtonChange} color="inherit">Login</Button>
        </StyledToolBar> 
      </AppBar>
  );
}
export default Header