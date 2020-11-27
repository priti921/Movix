import React, { useState } from 'react'
import Axios from 'axios';
function MovieSlider() {
    // api key 
    // https://api.themoviedb.org/3/movie/550?api_key=53d5f666ce2f8beb85e15e9e4facf9ae
    const [Data, setData] = useState([]);
    let requestData = async () => {
        await Axios.get('https://api.themoviedb.org/3/movie/550?api_key=53d5f666ce2f8beb85e15e9e4facf9ae')
            .then((res) => console.log(res))
            .catch((err) => console.error(err))
    }
    requestData();

    return (
        <div>
            test
        </div>
    )
}


export default MovieSlider;
