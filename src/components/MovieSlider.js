import React, { useState, useEffect } from 'react'
import Key from '../Key';
import Axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
function MovieSlider() {
    // api key 
    const [Data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                .then((res) => setData(res.data.results.slice(0, 10)))
                .catch((err) => console.error(err))
        }
        fetchData();

    }, []);

    let topMovies = Data ? (
        Data.map((movie) => {
            return (
                <div className="movie" key={movie.id}>
                    <li className="movie-title">{movie.title}</li>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                </div>
            )
        })
    ) : (<p>Loading..</p>)
    return (
        <AwesomeSlider>
            {topMovies}
        </AwesomeSlider>
    )
}


export default MovieSlider;
