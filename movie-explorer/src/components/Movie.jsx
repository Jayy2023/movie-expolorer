import React from 'react';
import { Grid, Typography } from '@mui/material';
import {IMAGES_PATH, COVER_PLACEHOLDER} from "../config";



const Movie = ({movie, genres}) => {
    return(
        <Grid container={true} spacing={2}>
            <Grid item={true} md={3}>
                {
                    movie.poster_path ?
                    <img src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                    alt={movie.title}
                    />

                    :
                     <img src={COVER_PLACEHOLDER} 
                     alt={movie.title}
                     />
                }
            </Grid>
            <Grid item={true} md={9}></Grid>
        </Grid>
    )
}
export default Movie;

