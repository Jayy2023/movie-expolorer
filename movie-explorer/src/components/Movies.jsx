
import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import {Link } from "react-router-dom";
import { IMAGES_PATH } from '../config';

const Movies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return null; 
  }

  return (
    <ImageList cols={5} rowHeight={365} gap={12}>
      {movies.map((movie) => (
        <ImageListItem key={movie.id}>
       <Link to={`/movie/${movie.id}`}>
        {
          movie.poster_path && (
            <img src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                alt={movie.title}/>
          )
        }
        <ImageListItemBar
          title={movie.title}
          subtitle={movie.subtitle}
          />
       </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Movies;
