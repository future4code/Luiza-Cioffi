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
    padding: 5%;
`

export const PosterImage = styled.img`
    align-items: left;
    /* position: absolute; */
    border-radius: 5px;
    max-width:15rem;
    margin: 5%;
`

export const DetailsDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

export const Title = styled.div`
    font-size: 14px;
`
export const Infos= styled.div`
    font-size: 9px;
    display: flex;
    flex-direction: row;
`

export const Ratting= styled.div`
    margin: 1px;
    font-size: 11px;
`

export const Sinopsis= styled.div`
    .h1{
        font-weight: bold;
        font-size: 12px;
    }
    .p{
        font-weight: normal;
        font-size: 10px;
    }
`

export const Crew= styled.div`
    .h1{
        font-weight: bold;
        font-size: 10px;
    }
    .p{
        font-weight: normal;
        font-size: 10px;
    }
`
