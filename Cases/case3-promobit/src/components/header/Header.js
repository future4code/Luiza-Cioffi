import React from 'react';
import logo from '../../assets/logo.png'
import {HeaderStyle, LogoImage} from './styled'
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/Coordinator';

const Header = () => {
    const history = useHistory()

    return (
        <HeaderStyle>
            <LogoImage src={logo} onClick={() => goToHome(history)}/>
        </HeaderStyle>

    )
}

export default Header