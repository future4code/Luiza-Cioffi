import React from 'react';
import {DetailContainer, PosterImage, DetailsDescription, Title, Infos, Ratting, Sinopsis, Crew } from './styled';

const DetailCard = (props) => {
    return (
        <DetailContainer>
            <PosterImage src={props.image}/>
            <DetailsDescription>
                <Title>
                    <h1>{props.title} ({props.release_date})</h1>
                </Title>
                <Infos>
                    <p>{props.release_date} (BR) - {props.genres} - {props.runtime}min</p>
                </Infos>
                <Ratting>
                    <div>{props.vote_average} / 10 - Avaliação dos usuários </div>
                </Ratting>
                <Sinopsis>
                    <h1>Sinopse</h1>
                    <p>{props.overview}</p>
                </Sinopsis>
                <Crew>
                    <h1>nome</h1>
                    <p>cargo</p>
                </Crew>
            </DetailsDescription>
        </DetailContainer>
    )
}

export default DetailCard