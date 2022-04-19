import styled from 'styled-components';

export const MenuContainer = styled.div`
    width: 100%;
    min-height: 10rem;
    background-color: #2d0c5d;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
`

export const MenuText = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MenuOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MenuButtons = styled.div`
    align-items: center
    margin-bottom:30px;
    font-weight: bolder;
    padding: 5%;

    button{
        width:100px ;
        border-radius: 5px ;
        background-color: white;
        color: black;
        transition: 0.3s;
        font-weight: 600;

        :hover{
            cursor: pointer;
            opacity: 0.7;
        }
    }
`