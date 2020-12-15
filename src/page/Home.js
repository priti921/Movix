import React from 'react'
// components
import MovieSlider from '../components/MovieSlider';
import TrendingNow from '../components/TrendsNow';
import PopularNow from '../components/PopularNow';
import TopRated from '../components/TopRated';
import About from '../components/about';

function Home() {
    return (
        <>
            <MovieSlider />
            <TrendingNow />
            <PopularNow />
            <TopRated />
            <About />
        </>
    )
}

export default Home
