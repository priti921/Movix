import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import Key from '../Key';


function MovieDetails() {
    // getting  id from url parameter
    let { id } = useParams();
    // saving fetched data
    const [Data, setData] = useState([]);

    // fetch movie details
    useEffect(() => {
        let fetchData = async () => {
            await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=en-US`)
                .then((res) => setData(res.data))
        }
        fetchData();

    }, []);



    console.log(Data);
    return (
        <div className="Movie-details-page">
            <p style={{ "color": "black" }}>TEST</p>
            <p style={{ "color": "black" }}>{Data.title}</p>
        </div>
    )
}

export default MovieDetails
