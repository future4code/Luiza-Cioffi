import React from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import {VideoListContainer} from './styled'

const ResultsPage = () => {
    const TERMODEBUSCA = 'amor'
    const videos = useRequestData([], `${BASE_URL}/search?part=id,snippet&q=${TERMODEBUSCA}&key=AIzaSyDhXlfg8cwlAL5DBGfsjl7gB1JSRK2pwok`)
    const onClickVideo = () => {

    }
    
    const videoCards = videos.map((video)=>{
        return (
            <VideoCard
                key={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                image={video.snippet.thumbnails.high.url}
                onClick={onClickVideo()}
            />
        )
    })

    return (
        <VideoListContainer>
            {videoCards}
            {/* <VideoCard
            title={'Video 1'}
            image={'https://www.olivetreefilmes.com.br/wp-content/uploads/2021/05/Como-fazer-edicao-de-videos-para-Youtube-1-1200x900.jpg'}
            onClick={() => null}
            description={'Little description about de video'}
            /> */}
        </VideoListContainer>
    )
}

export default ResultsPage

