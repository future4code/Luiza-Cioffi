import React from 'react';
import { HomePageContainer, PageButtons } from './styled';
import MovieCard from '../../components/movieCard/MovieCard';
import MenuCard from '../../components/menuCard/MenuCard'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url'
import { API_KEY } from '../../constants/api_key';
import { useHistory } from 'react-router-dom';
import { goToDetail } from '../../routes/Coordinator';
import { useState } from 'react';

const HomePage = () => {

  const history = useHistory()
  const [page, setPage] = useState(1)
  
  const movies = useRequestData([], `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)  
  
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
  
  const changePageNext = (number) => {
      setPage(page + number)
      window.scrollTo(0,0)
  }
  const changePageBack = (number) => {
      if(page >= 2){
          setPage(page - number)
      }
      window.scrollTo(0,0)
  }
  
  return (
    <div>
      <HomePageContainer>
        <MenuCard 
          text={'Milhões de filmes, séries e pessoas para descobrir. Explore já.'}
        />
        {movieList}
      </HomePageContainer>
      <PageButtons>
        <button onClick={(() => {changePageBack(1)})}>Voltar</button>
        <button onClick={(() => {changePageNext(1)})}>Próximo</button>
      </PageButtons>
    </div>
  );
}
export default HomePage;