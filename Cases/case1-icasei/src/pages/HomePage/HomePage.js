import React from 'react';
import Button from '@material-ui/core/Button';
import { ScreenContainer, LogoImage, InputsContainer } from './styled'
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'


const HomePage = () => {

    const onSearch = () => {

    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSearch}>
                    <TextField
                        name={'search'}
                        // value={}
                        // onChange={}
                        label={"Pesquisar"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                    />
                </form>
            </InputsContainer>
            <Button variant="contained" color="primary">
                Buscar
            </Button>
        </ScreenContainer>
    )
}

export default HomePage