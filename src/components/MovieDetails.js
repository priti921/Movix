import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import Key from '../Key';
import About from './about';


function MovieDetails() {

    // getting  id from url parameter
    let { id } = useParams();

    // saving fetched data
    const [Data, setData] = useState([]);

    //set loading
    const [Loading, setLoading] = useState(true);

    //fetched recommendations data
    const [recommendation, setRecommendation] = useState([]);

    //fetched similer data
    const [similer, setSimiler] = useState([]);

    // fetch movie details
    useEffect(() => {
        let fetchData = async () => {
            await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`)
                .then((res) => setData(res.data))
                .catch((err) => console.log(err))

            await Axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${Key}&language=en-US&page=1`)
                .then((res) => setSimiler(res.data.results.slice(0, 12)))
                .then((res) => console.log(res.data.results))
                .catch((err) => console.log(err))

            await Axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${Key}&language=en-US&page=1`)
                .then((res) => setRecommendation(res.data.results.slice(0, 12)))
                .then((res) => console.log(res))
                .then(() => setLoading(false))
                .catch((err) => console.log(err))
        }
        fetchData();

    }, []);


    //converting  mins to hours + mins
    let timeConvert = (addedMins) => {
        let hours = (addedMins / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes}m`;
    }


    let page = Loading ? (<div>Loading</div>) : (

        <div className="Movie-details-page">
            <div className="overlay">
                <img className="movie-details-poster" src={`https://image.tmdb.org/t/p/original/${Data.backdrop_path}`} alt={Data.title} />
            </div>
            <ul className="movie-details-details">

                <li className="movie-page-title">{Data.title}</li>
                <li className="movie-page-tagline">{Data.tagline}</li>
                <ul className="movie-page-data">
                    <svg className="movie-page-star" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107" /></svg>
                    <li className="movie-page-rating">{Data.vote_average}</li>
                    <li className="movie-page-duration">{timeConvert(Data.runtime)}</li>
                    <li className="movie-page-release-year">{Data.release_date.slice(0, 4)}</li>
                    {Data.genres[0] && <li className="movie-page-genres">{Data.genres[0]["name"]}</li>}
                    {Data.genres[1] && <li li className="movie-page-genre">{Data.genres[1]["name"]}</li>}
                    {Data.genres[2] && <li className="movie-page-genre">{Data.genres[2]["name"]}</li>}
                </ul>
                <li className="movie-page-overview">{Data.overview}</li>
            </ul>
        </div >
    )

    let similerMovies = Loading ? (<div>Loading...</div>) : (
        similer.map((movie) => {
            return <div className="movie-card" key={movie.id}>
                <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <li className="movie-card-title">{movie.title}</li>
                <ul className="movie-card-details">
                    <li className="movie-card-year">{movie.release_date.slice(0, 4)}</li>
                    <svg className="movie-card-star-icon" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107" /></svg>
                    <li className="movie-card-star">{movie.vote_average}</li>

                </ul>
            </div>
        })
    )

    let recommendationMovies = Loading ? (<div>Loading...</div>) : (
        recommendation.map((movie) => {
            return <div className="movie-card" key={movie.id}>
                <img className="movie-card-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <li className="movie-card-title">{movie.title}</li>
                <ul className="movie-card-details">
                    <li className="movie-card-year">{movie.release_date.slice(0, 4)}</li>
                    <svg className="movie-card-star-icon" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" fill="#ffc107" /></svg>
                    <li className="movie-card-star">{movie.vote_average}</li>

                </ul>
            </div>
        })
    )

    return (

        <>
            <div>
                {page}
            </div>
            <div className="trending-now similer-movies">
                <h2 className="trending-now-title">You might like</h2>
                <div className="trending-now-movies">
                    {similerMovies}
                </div>
                <h2 className="trending-now-title">Recommended</h2>
                <div className="trending-now-movies">
                    {recommendationMovies}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <About className="fix-about-on-details" />
        </>
    )

}

export default MovieDetails
