import React from 'react';
import Button from '@material-ui/core/Button';
import { ScreenContainer, LogoImage, InputsContainer } from './styled'
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import { goToResultsPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


const HomePage = () => {
    const history = useHistory();

    const onSearch = () => {
        goToResultsPage(history)
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputsContainer>
                <form onSubmit={onSearch}>
                    <TextField
                        name={'search'}
                        label={"Pesquisar"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                    />
                </form>
            </InputsContainer>
            <Button variant="contained" color="primary" onClick={() => onSearch()}>
                Buscar
            </Button>
        </ScreenContainer>
    )
}

export default HomePage