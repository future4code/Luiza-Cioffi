import styled from 'styled-components';

export const DetailContainer = styled.div`
    width: 100%;
    min-height: 20rem;
    background-color: #2d0c5d;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

`

export const PosterImage = styled.img`
    align-items: left;
    border-radius: 5px;
    max-width:15rem;
    margin: 3%;
`

export const DetailsDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

export const Title = styled.div`
    .h1{
        font-weight: bold;
        font-size: 12px;
    }    
`
export const Infos= styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;
`

export const Ratting= styled.div`
    margin: 1px;
    font-size: 14px;
`

export const Sinopsis= styled.div`
    font-weight: 400;
    font-size: 13px;
`