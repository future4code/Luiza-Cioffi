import React from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { API_KEY } from '../../constants/api_key';
import { BASE_URL } from '../../constants/url';
import useRequestDatail from '../../hooks/useRequestDatail';
import { DetailPageContainer, StyledDetailsCard, StyledCastList, StyledTrailer, StyledRecommendationsCard, StyledRecommendantionsList } from './styled'
import DetailCard from '../../components/detailCard/DetailCard'
import useRequestCast from '../../hooks/useResquestCast';
import useRequestTrailer from '../../hooks/useRequestTrailer';
import useRequestData from '../../hooks/useRequestData';
import { goToDetail } from '../../routes/Coordinator';

const DetailPage = () => {

  const params = useParams()
  const history = useHistory()
  const movie = useRequestDatail({}, `${BASE_URL}/movie/${params.id}?api_key=${API_KEY}&language=pt-BR`)
  const cast = useRequestCast([], `${BASE_URL}/movie/${params.id}/credits?api_key=${API_KEY}&language=pt-BR`)
  const castList = cast.map((castPerson) => {
    return (
      <StyledDetailsCard key={castPerson.cast_id}>
        <img src={`https://image.tmdb.org/t/p/w500${castPerson.profile_path}`} alt={`Imagem de ${castPerson.name}`} />
        <div className="card-text">
          <p>{castPerson.name}</p>
          <p>{castPerson.character}</p>
        </div>
      </StyledDetailsCard>
    )
  })

  const movieTrailers = useRequestTrailer({}, `${BASE_URL}/movie/${params.id}/videos?api_key=${API_KEY}&language=en-US`)
  const trailer = movieTrailers[0]

  const recommendations = useRequestData([], `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}&language=pt-BR&page=1`)
  const recommendationsList = recommendations.map((film) => {
    return (
      <StyledRecommendationsCard key={film.id}>
        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`Imagem de ${film.title}`} onClick={() => goToDetail(history, film.id)}/>
        <p>{film.title}</p>
      </StyledRecommendationsCard>
    )
  })

  return (
    <DetailPageContainer>
      
      <DetailCard
        image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        title={movie.original_title}
        release_date={movie.release_date}
        // genres={movie.genres.0.name}
        runtime={movie.runtime}
        vote_average={movie.vote_average}
        overview={movie.overview}
      />
      
      <StyledCastList>
        {castList}
      </StyledCastList>

      {trailer &&  <StyledTrailer  trailer={trailer}>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </StyledTrailer>
      }    

      <StyledRecommendantionsList>
      {recommendationsList}
      </StyledRecommendantionsList>

    </DetailPageContainer>
  );
}

export default DetailPage;

