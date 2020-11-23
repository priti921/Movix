import React from 'react';
import Headroom from 'react-headroom';


const navbar = () => {
    return <Headroom className="Headroom">
        <p className="Movix">Movix</p>
        <input className="search" type="text" />
        <ul className="nav">
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>My list</li>
        </ul>
    </Headroom>;
}

export default navbar;