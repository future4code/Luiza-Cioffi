import styled from 'styled-components'

export const MovieContainer = styled.div`
  width: 20%;
  max-width: 200px;
  margin: 10px;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  flex-direction:row;
  flex-wrap:wrap ;
`

export const MovieCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 15px;
  .card-text{
        width: 190px;
        min-height: 50px;
        text-align: left;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1:nth-child{
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
    flex-direction: column;
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