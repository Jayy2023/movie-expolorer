import React from 'react'
import Suggestion from '../components/Suggestion'
import {useSelector} from 'react-redux';

const SearchMoviesSuggestion = () => {
    const {search} = useSelector((store) => store)

  return (
    
      <Suggestion movies={search}/>
    
  )
}

export default SearchMoviesSuggestion

