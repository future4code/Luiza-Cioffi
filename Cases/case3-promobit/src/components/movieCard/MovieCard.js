import React from 'react';
import { MovieContainer, MovieCardContent, MovieImage } from './styled';

const MovieCard = (props) => {

    return (
        <MovieContainer onClick={props.onClick}>
            <MovieImage src={props.image}/>
            <MovieCardContent className='card-text'>
                <p>{props.title}</p>
                <p>{props.release_date}</p>
            </MovieCardContent>
        </MovieContainer>
    )
}

export default MovieCard