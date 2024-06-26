import React from 'react';
import SearchMoviesInput from './SearchMoviesInput';
import SearchMoviesSuggestions from './SearchMoviesSuggestions';
import { BG_IMAGE } from '../utils/constant';

const SearchMovies = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className='h-screen w-screen object-cover -mt-5' src={BG_IMAGE} alt="bg-login" />
      </div>
      <div>
        <SearchMoviesInput />
        <SearchMoviesSuggestions />
      </div>
    </div>
  )
}

export default SearchMovies