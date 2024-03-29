import React from "react";
import { InputsContainer } from "./Styled";
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = ({setLoginButton}) => {

  const [form, onChange, clear] = useForm({email: "", password: ""})
  const history = useHistory()
  
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history, setLoginButton)
  }

  
  return (
    <InputsContainer>
        <form onSubmit={onSubmitForm}>
            <TextField 
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"email"}
            />

            <TextField 
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin="normal"
                required
                type={"password"}
            />

            <Button 
                type="submit"
                fullWidth
                variant="contained"
                color={"primary"}
                margin={"normal"}
            >
                Fazer Login
            </Button>
            </form>
      </InputsContainer>
  );
}

export default LoginForm;
