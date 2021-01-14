import React from 'react'

function About() {
    return (
        <div className="about-info">
            <div className="logo-and-table">
                <p className="Movix about-logo">Movix</p>
                <table className="about-table">
                    <tr>
                        <th>Legal</th>
                        <th>Account</th>
                        <th>Newsletter</th>
                    </tr>
                    <tr>
                        <td>Terms of use</td>
                        <td>My Account</td>
                        <td>Subscribe</td>
                    </tr>
                    <tr>
                        <td>Privacy Policy</td>
                        <td>Watchlist</td>
                        <td>Get latest news</td>
                    </tr>
                    <tr>
                        <td>Security</td>
                        <td>Collections</td>

                    </tr>
                </table>

            </div>
            <p className="copyright">&copy; 2020 Movix. All rights reserved</p>
        </div>
    )
}

export default About
