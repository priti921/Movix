import React from 'react';
import Headroom from 'react-headroom';


const navbar = () => {
    return (
        <Headroom>
            <div className="navbar">
                <p className="Movix">Movix</p>
                <input className="search" type="text" />
                <ul className="navlinks">
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>My list</li>
                </ul>

            </div>
        </Headroom>
    )
}

export default navbar;