import React from 'react';
import { HomePageContainer } from './styled';
import MovieCard from '../../components/movieCard/MovieCard'

const HomePage = () => {
  return (
    <HomePageContainer className='movie-list'>
      HomePage
      <MovieCard
        title={'Título'}
        image={'https://fhox.com.br/wp-content/uploads/2017/11/81c2c457691753-5a059d944bf23.jpg'}
        release_date={'0/00/2222'}
        onClick={() => null}
      />
      <MovieCard
        title={'Título'}
        image={'https://fhox.com.br/wp-content/uploads/2017/11/81c2c457691753-5a059d944bf23.jpg'}
        release_date={'0/00/2222'}
        onClick={() => null}
      />
    </HomePageContainer>
  );
}

export default HomePage;