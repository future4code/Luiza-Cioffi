import styled from 'styled-components'

export const MovieContainer = styled.div`
  width: 20%;
  max-width: 200px;
  margin: 10px;
`

export const MovieCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  .card-text{
        width: 190px;
        min-height: 50px;
        text-align: left;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-child(1){
        margin: 0;
        font-weight: bolder;
        }
        p:nth-child(2){
            color: gray;
            font-weight: bolder;
            margin: 0;
        }
    } 
`

export const MovieImage = styled.img`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 1rem;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    :hover{
        opacity: 0.7;
    }
`