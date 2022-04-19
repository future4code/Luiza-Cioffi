import React from 'react';
import {MenuContainer, MenuText, MenuOptions, MenuButtons} from './styled'

const MenuCard = (props) => {
    return (
        <MenuContainer>
            <MenuText>{props.text}</MenuText>
            <MenuOptions>FILTRE POR:</MenuOptions>
            <MenuButtons>
            <button onClick={(() => {})}>Ação</button>
            <button onClick={(() => {})}>Aventura</button>
            <button onClick={(() => {})}>Animação</button>
            <button onClick={(() => {})}>Comédia</button>
            <button onClick={(() => {})}>Crime</button>
            <button onClick={(() => {})}>Documentário</button>
            <button onClick={(() => {})}>Drama</button>
            <button onClick={(() => {})}>Família</button>
            <button onClick={(() => {})}>Fantasia</button>
            <button onClick={(() => {})}>História</button>
            <button onClick={(() => {})}>Terror</button>
            <button onClick={(() => {})}>Música</button>
            <button onClick={(() => {})}>Mistério</button>
            <button onClick={(() => {})}>Romance</button>
            <button onClick={(() => {})}>Ficção Científica</button>
            <button onClick={(() => {})}>Cinema TV</button>
            <button onClick={(() => {})}>Thriller</button>
            <button onClick={(() => {})}>Guerra</button>
            <button onClick={(() => {})}>Faroeste</button>
            </MenuButtons>
        </MenuContainer>
    )
}
export default MenuCard;