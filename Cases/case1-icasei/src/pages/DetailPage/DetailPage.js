import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { ScreenContainer, VideoContainer } from './styled'

const DetailPage = () => {

    const params = useParams()
    const video = useRequestData({}, `https://www.youtube.com/embed/${params.id}`)[1]

    return (
        <div>
            <iframe marginHeight={'10px'} width="360" max-width="100vw" height="315" src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ScreenContainer>
                <VideoContainer>
                    <Typography gutterBottom align='center' variant='h5' color='primary'>{video.snippet.title}</Typography>
                    <Typography align='center'>{video.snippet.description}</Typography>
                </VideoContainer>
            </ScreenContainer>
        </div>
    )
}
export default DetailPage