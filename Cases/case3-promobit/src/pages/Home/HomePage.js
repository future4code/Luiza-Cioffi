import React from 'react';
import { HomePageContainer } from './styled';
import MovieCard from '../../components/movieCard/MovieCard';
import MenuCard from '../../components/menuCard/MenuCard'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url'
import { API_KEY } from '../../constants/api_key';
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../routes/Coordinator';

const HomePage = () => {

  const history = useHistory()

  const movies = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

  const movieList = movies.map((movie) => {
    
    return (
      <MovieCard
        title={movie.original_title}
        image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        release_date={movie.release_date}
        onClick={() => goToDetail(history, movie.id)}
        key={movie.id}
      />
    )
  })

  return (
    <HomePageContainer>
      <MenuCard 
        text={'Milhões de filmes, séries e pessoas para descobrir. Explore já.'}
      />
      {movieList}
    </HomePageContainer>
  );
}
export default HomePage;