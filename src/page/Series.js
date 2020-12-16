import React from 'react'
import PopularSeries from '../components/Series/PopularSeries'
import TrendingSeries from '../components/Series/TrendingSeries'
import TopratedSeries from '../components/Series/TopratedSeries'
import AiringSeries from '../components/Series/AiringSeries';
import About from '../components/about';

function Series() {
    return (
        <div className="series-page">
            <span className="black-box"></span>
            <PopularSeries />
            <TrendingSeries />
            <AiringSeries />
            <TopratedSeries />

            <About />
        </div>
    )
}

export default Series
