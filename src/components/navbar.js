import React from 'react';
import Headroom from 'react-headroom';
import {
    Link
} from 'react-router-dom';




const navbar = () => {
    return (
        <Headroom>
            <div className="navbar">
                <p className="Movix"><Link to="/">Movix</Link></p>
                <input className="search" type="text" />
                <ul className="navlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/Series">Series</Link></li>
                    <li>My list</li>
                </ul>
            </div>
        </Headroom>
    )
}

export default navbar;