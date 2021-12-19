import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./Styled";
import logo from "../../assets/logo.png";
import RegisterForm from "./RegisterForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const RegisterPage = ({setLoginButton}) => {

  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <RegisterForm setLoginButton={setLoginButton} />
    </ScreenContainer>
  );
}

export default RegisterPage;