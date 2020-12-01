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
                    <div className="overlay">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                    </div>
                    <ul className="movie-details">
                        <li className="movie-title">{movie.title}</li>
                        <li className="movie-overview">{movie.overview}</li>
                        <div className="movie-details-bar">
                            <li className="movie-rating">{movie.vote_average}</li>
                            <li className="movie-genre">{movie.genre_ids}</li>
                            <li className="movie-release-year">{movie.release_date.slice(0, 4)}</li>
                        </div>
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
