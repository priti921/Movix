
import React from 'react'
import About from '../components/about';

// components
import PopularMovies from '../components/Movies/PopularMovies';
import TrendingMovies from '../components/Movies/TrendingMovies';
import TopratedMovies from '../components/Movies/TopratedMovies';
import UpcomingMovies from '../components/Movies/UpcomingMovies';
function Movies() {
    return (
        <div className="movies-page">
            <span className="black-box"></span>
            <PopularMovies />
            <TrendingMovies />
            <TopratedMovies />
            <UpcomingMovies />
            <About />
        </div>
    )
}

export default Movies
