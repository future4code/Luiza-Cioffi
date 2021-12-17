import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./Styled";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { goToRegister } from "../../routes/coordinators" 
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {

  useUnprotectedPage()
  const history = useHistory()

  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <LoginForm />
      
      <SignUpButtonContainer>
      <Button 
        onClick={() => goToRegister(history)}
        type="submit"
        fullWidth
        variant={"text"}
        color={"primary"}
        margin={"normal"}
      >
        Não possui conta? Clique aqui para FAZER CADASTRO
      </Button>
      </SignUpButtonContainer>

    </ScreenContainer>
  );
}

export default LoginPage;
