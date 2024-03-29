import React from 'react';
import { MovieContainer, MovieCardContent, MovieImage } from './styled';

const MovieCard = (props) => {
    return (
        <MovieContainer onClick={props.onClick}>
            <MovieImage src={props.image} alt={props.title}/>
            <MovieCardContent>
                <h3>{props.title}</h3>
                <p>{props.release_date}</p>
            </MovieCardContent>
        </MovieContainer>
    )
}
export default MovieCard;