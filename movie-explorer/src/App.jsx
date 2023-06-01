import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PopularMovies from './containers/PopularMovies';
import MovieDetails from './containers/MovieDetails';
import Layout from './components/Layout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<PopularMovies />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
