import styled from "styled-components";

export const DetailPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
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
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-color: gray silver;
    scrollbar-width: thin;
    margin: 1rem;
    margin-top: 3rem;
`

export const StyledTrailer = styled.div`
    margin-bottom: 2rem;
    margin-left: 2rem;
    @media(max-width: 650px) {
            display: flex;
            align-items: center;
            margin-left: 10%;
        iframe{
            width: 90%;
            height: 215px;
        }
    }
`