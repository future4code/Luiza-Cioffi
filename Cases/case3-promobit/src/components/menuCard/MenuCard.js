import React from 'react';
import {MenuContainer, MenuText, MenuOptions} from './styled'

const MenuCard = (props) => {
    return (
        <MenuContainer>
            <MenuText>{props.text}</MenuText>
            <MenuOptions>botões</MenuOptions>
        </MenuContainer>
    )
}

export default MenuCard