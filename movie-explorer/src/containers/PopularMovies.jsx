import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, resetState } from '../redux/movies';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import { Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getPopularMovies());
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const loadMore = () => {
    if (movies.hasMore) {
      dispatch(getPopularMovies(movies.page + 1)); // Pass the page parameter correctly
    }
  };

  if (movies.isFetching && movies.page === 0) {
    return <Loader />;
  }

  return (
    <>
      <Typography component="h2" variant="h3">
        Popular Movies
      </Typography>
      <Typography variant="p">by: JJN Movies</Typography>
      <InfiniteScroll
        dataLength={movies.results.length}
        next={loadMore}
        hasMore={movies.hasMore}
        loader={<Loader />}
        endMessage={<p>Click the search bar and search for more movies!</p>}
      >
        <Movies movies={movies.results} genres={genres} />
      </InfiniteScroll>
    </>
  );
};

export default PopularMovies;
