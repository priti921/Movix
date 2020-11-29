import React, { useState, useEffect } from 'react'
import Key from '../Key';
import Axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
function MovieSlider() {

    const [Data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                .then((res) => setData(res.data.results.slice(0, 10)))
                .then(() => console.log(Data))
                .catch((err) => console.error(err))
        }
        fetchData();

    }, []);

    let topMovies = Data ? (
        Data.map((movie) => {
            return (
                <div className="movie" key={movie.id}>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                    <ul className="movie-details">
                        <li>{movie.title}</li>
                        <li>{movie.overview}</li>
                        <li>{movie.popularity}</li>
                        <li>{movie.vote_average}</li>
                        <li>{movie.release_date.slice(0, 4)}</li>
                        <li>{movie.genre_ids}</li>
                    </ul>
                </div>
            )
        })
    ) : (<p>Loading..</p>)
    return (
        <AwesomeSlider className="slider">
            {topMovies}
        </AwesomeSlider>
    )
}


export default MovieSlider;
