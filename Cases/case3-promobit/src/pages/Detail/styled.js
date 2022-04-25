import styled from "styled-components";

export const DetailPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
`

export const StyledDetailsCard = styled.div`
    box-shadow: 1px 1px 2px gray;
    margin: 1rem;
    min-width: 175px;
    max-width: 175px;
    height: 20rem;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    transition: 0.5s;
    border: 1px solid rgba(195, 195, 195, 0.5);
    :hover{
        transform: translateY(-3px);
    }
    img{
        width: 165px;
    }
    p{
        margin: 0;
    }
    p:nth-child(1){
        font-weight: bold;
    }
    .card-text{
        height: 18%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.50em;
    }
`

export const StyledCastList = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
    overflow-x: scroll;
    scrollbar-color: gray silver;
    scrollbar-width: thin;
    margin: 1rem;
    margin-top: 3rem;
`

export const StyledTrailer = styled.div`
    margin-bottom: 2rem;
    margin-left: 2rem;
    @media(max-width: 60vw) {
            display: flex;
            align-items: center;
            margin-left: 10%;
        iframe{
            width: 90%;
            height: 215px;
        }
    }
`

export const StyledRecommendationsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    cursor:pointer;
    :hover{
        transform: translateY(-3px);
    }
    img{
        width: 176px;
        border-radius: 4px;
    }
    p{
        margin: 0;
        font-weight: bold;
        font-size: 12px;
        display: flex;
        flex-direction: center;
    }
`

export const StyledRecommendantionsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    overflow-x: scroll;
    scrollbar-color: gray silver;
    scrollbar-width: thin;
    margin: 1rem;
    margin-top: 3rem;
    padding: 0.5em;
    margin: 1rem;
`