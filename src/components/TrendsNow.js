import React, { useState, useEffect } from 'react'
import Axios from 'axios';
// api key
import Key from '../Key';




function TrendsNow() {
    // movie data collected from api call
    const [Data, setData] = useState([])

    // called once 
    useEffect(() => {
        const fetchData = async () => {
            // api call for trending movies 
            await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${Key}`)
                .then((res) => setData(res.data.results.slice(0, 10)))
                .catch((err) => console.error((err)))
        }
        fetchData();
        console.log(Data);

    }, []);

    // mapping through data
    let trendingMovies = Data ? (
        Data.map((trending) => {
            return <div className="movie-card">
                <li className="movie-card-title">{trending.title}</li>
                <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/original/${trending.poster_path}`} alt={trending.title} />
            </div>
        })
    ) : (<p>Loading...</p>)

    return (
        <div className="trending-now">
            <h2 className="treding-now-title">Trending now</h2>
            <h3 className="trending-now-movies-title">movies</h3>
            <div className="trending-now-movies">
                {trendingMovies}
            </div>
        </div>
    )
}

export default TrendsNow
