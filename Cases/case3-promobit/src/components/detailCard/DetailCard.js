import React from 'react';
import {DetailContainer, PosterImage, DetailsDescription, Title, Infos, Ratting, Sinopsis, Crew } from './styled';

const DetailCard = (props) => {
    return (
        <DetailContainer>
            <PosterImage src={props.image}/>
            <DetailsDescription>
                <Title>
                    <h1>{props.title}</h1>
                </Title>
                <Infos>
                    <p>{props.release_date} (BR)  -  {props.runtime} min</p>
                </Infos>
                <Ratting>
                    <p>{props.vote_average} / 10 - Avaliação dos usuários </p>
                </Ratting>
                <Sinopsis>
                    <h1>Sinopse</h1>
                    <p>{props.overview}</p>
                </Sinopsis>
            </DetailsDescription>
        </DetailContainer>
    )
}
export default DetailCard