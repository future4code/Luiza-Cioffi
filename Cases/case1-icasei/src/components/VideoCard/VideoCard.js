import React from 'react';
import CardActionArea from '@material-ui/core/CardMedia';
import { Button, CardMedia, Typography } from '@material-ui/core';
import { VideoCardContainer, VideoCardContent } from './styled';

const VideoCard = (props) => {

    return (
        <VideoCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component={'img'}
                    alt={props.title}
                    height={'150px'}
                    image={props.image}
                    title={props.title}
                />
                <VideoCardContent>
                    <Typography align={'center'}>
                        {props.title.toUpperCase()}
                    </Typography>
                    <Typography align={'center'}>
                        {props.description}
                    </Typography>
                </VideoCardContent>
                <Button variant="contained" color="primary"> Detalhes </Button>
            </CardActionArea>
        </VideoCardContainer>
    )
}

export default VideoCard