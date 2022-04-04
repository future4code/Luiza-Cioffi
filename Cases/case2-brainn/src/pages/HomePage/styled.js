import styled from "styled-components";
import { megaSenaColor, quinaColor, lotofacilColor, lotomaniaColor, timemaniaColor, diaDeSorteColor} from "../../constants/colors";

const getColor = color => {
    if(color === 0){
        return `background-color: ${megaSenaColor};`
    }if(color === 1){
        return `background-color: ${quinaColor};`
    }if(color === 2){
        return `background-color: ${lotofacilColor};`
    }if(color === 3){
        return `background-color: ${lotomaniaColor};`
    }if(color === 4){
        return `background-color: ${timemaniaColor};`
    }if(color === 5){
        return `background-color: ${diaDeSorteColor};`
    }
}

export const StyledPageContainer = styled.div`
    ${({ color }) => getColor(color)}
    min-height: 100vh;
    display: flex;
    font-family: 'Montserrat', sans-serif; 
    .area-select{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        padding: 10% 0 5% 0;
        color: ${'#FFFFFF'};
        select{
            width: 10rem;
            height: 2rem;
        }
    }
    .area-results{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(235, 235, 235);
        border-radius: 50% 0 0 50%;
        width: 60%;
        padding: 20% 0 0 0;
        .area-results-balls{
            display: flex;
            flex-wrap: wrap;
        }
    }
    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        .area-select{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 100%;
        }
        .area-results{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12% 12% 0 0;
            width: 100%;
            text-align: center;
            min-height: 100%;
            h5{
                margin-top: 5px;
            }
            .area-results-balls{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: 100%;
            }
        }
    }
`

export const StyledNumbersBall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    margin: 5px;
    background-color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid silver;
` 