import React from 'react';
import logo from '../../assets/logo.png'
import {HeaderStyle, LogoImage} from './styled'

const Header = () => {
    return (
        <HeaderStyle>
            <LogoImage src={logo}/>
        </HeaderStyle>

    )
}

export default Header