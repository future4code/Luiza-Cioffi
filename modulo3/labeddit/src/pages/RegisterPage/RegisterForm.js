import React from "react";
import { InputsContainer, SignUpFormContainer } from "./Styled";
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { register } from "../../services/users";


const RegisterForm = ({setLoginButton}) => {
    const history = useHistory()
    const initialState = {
      email: '',
      password: '',
      username: '',
    }
    
    const [form, onChange, clear] = useForm (initialState )

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, clear, history, setLoginButton)
    }

    return (
        <form onSubmit={onSubmitForm}>
          <SignUpFormContainer>
            <InputsContainer>
              <TextField
                value={form.username}
                name={"username"}
                onChange={onChange}
                label={'Nome'}
                variant={'outlined'}
                fullWidth
                required
                autoFocus
                margin="normal"
              />

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
            </InputsContainer>
            <Button 
                type="submit"
                fullWidth
                variant="contained"
                color={"primary"}
                margin={"normal"}
            >
                Fazer Cadastro
            </Button>
          </SignUpFormContainer>
        </form>
    )

}

export default RegisterForm