import React, { useState, useEffect } from 'react'
import Axios from 'axios';
// api key
import Key from '../../Key';

function PopularSeries() {
    // data
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true);

    // called once
    useEffect(() => {
        const fetchData = async () => {
            // api call for popular movies 
            await Axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${Key}&language=en-US&page=1`)
                .then((res) => setData(res.data.results.slice(0, 18)))
                .then(() => setLoading(false))
                .catch((err) => console.error((err)))

        }
        fetchData();
        console.log(Data);
    }, [Data]);

    // Popular movies mapping
    let PopularMovies = Loading ? (<div className="loading">Loading...</div>) : (
        Data.map((movie) => {
            return <div className="movie-card" key={movie.id}>
                <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <li className="movie-card-title">{movie.name}</li>
                <ul className="movie-card-details">
                    <li className="movie-card-year">{movie.first_air_date.slice(0, 4)}</li>
                    <svg className="movie-card-star-icon" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107" /></svg>
                    <li className="movie-card-star">{movie.vote_average}</li>

                </ul>
            </div>
        })
    )
    return (
        <div className="trending-now popular-movies">
            <h2 className="treding-now-title">Airing series</h2>
            <h3 className="trending-now-movies-title">movies</h3>
            <div className="trending-now-movies">
                {PopularMovies}
            </div>
        </div>
    )
}

export default PopularSeries