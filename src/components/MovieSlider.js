import React, { useState, useEffect } from 'react'
import Key from '../Key';
import Axios from 'axios';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function MovieSlider() {
    // top movies right now data
    const [Data, setData] = useState([]);
    // genre id and names
    const [Genre, setGenre] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            // calling api for getting popular movies
            await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                .then((res) => setData(res.data.results.slice(0, 10)))
                .then(() => console.log(Data))
                .then(() => {
                    // calling api for getting genre 
                    Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Key}&language=en-US`)
                        .then((res) => setGenre(res.data.genres))
                        .then(() => setLoading(false))
                        .catch((err) => console.error(err))
                })
                .catch((err) => console.error(err))



        }
        fetchData();

    }, [Data]);




    let topMovies = Loading ? (<div className="loading">Loading...</div>) : (
        Data.map((movie) => {


            // get genre names from the data collected from api call
            let movieGenres = [];
            Genre.forEach((genre) => {
                if (genre.id === movie.genre_ids[0]) {
                    movieGenres.push(genre.name)
                };
                if (genre.id === movie.genre_ids[1]) {
                    movieGenres.push(genre.name)
                }
                if (genre.id === movie.genre_ids[2]) {
                    movieGenres.push(genre.name)
                }

            })

            return (
                <div className="movie" key={movie.id}>
                    <div className="overlay">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                    </div>
                    <ul className="movie-details">
                        <li className="movie-title">{movie.title}</li>
                        <li className="movie-overview">{movie.overview}</li>
                        <div className="movie-details-bar">
                            <svg className="star" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107" /></svg>
                            <li className="movie-rating">{movie.vote_average}</li>
                            <li className="movie-genre">{movieGenres[0]}</li>
                            {movieGenres[1] && <li className="movie-genre">{movieGenres[1]}</li>}
                            {movieGenres[2] && <li className="movie-genre">{movieGenres[2]}</li>}
                            <li className="movie-release-year">{movie.release_date.slice(0, 4)}</li>
                        </div>
                        <div className="watch-movie-buttons">
                            <button className="watch-button">Watch</button>
                        </div>
                    </ul>
                </div >
            )
        })
    )


    return (
        <>

            { Loading ? (<div className="loading" > Loading...</div>) : (

                <AutoplaySlider className="slider"
                    play={true}
                    cancelOnInteraction={true} // should stop playing on user interaction
                    interval={100}
                    infinite={true}
                >
                    {topMovies}
                </AutoplaySlider>
            )
            }
        </>
    )
}


export default MovieSlider;
