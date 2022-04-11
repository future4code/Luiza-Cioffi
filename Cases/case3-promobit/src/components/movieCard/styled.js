import styled from 'styled-components'

export const MovieContainer = styled.div `
    display:flex ;
    align-items:center ;
    justify-content:center ;
    flex-direction:column;
    flex-wrap:wrap ;
`

export const MovieCardContent = styled.div`
   .card-text{
         width: 190px;
         min-height: 50px;
         text-align: left;
         padding: 5px 0;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         h3:nth-child{
         margin: 0;
         font-weight: bolder;
         }
         p:nth-child{
             font-weight: bolder;
             margin: 0;
         }
    } 
`

export const MovieImage = styled.img`
    display: flex;
    flex-direction: row;
    width: 200px;
    margin: 1rem;
    height: 250px;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    :hover{
        opacity: 0.7;
    }
`