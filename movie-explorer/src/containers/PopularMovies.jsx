import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPopularMovies, resetState } from '../redux/movies';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const {movies} = useSelector((store) => store);
  useEffect(() => {
    dispatch(getPopularMovies());
    return () => {
      dispatch(resetState());
    }
  }, [dispatch]);
  console.log(movies);

  return (
    <div>
      <h1>Hello from PopularMovies</h1>
    </div>
  )
}

export default PopularMovies;
