import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Socials/Socials'
import './NavBar.css'

class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <div className="navBar">

                <div className="NavigationLinks">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/consulting'>Consulting</Link>
                        </li>
                        <li>
                            <Link to='/classes'>Classes</Link>
                        </li>
                        <li>
                            <Link to='/artwork'>Artwork</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>

                <div className="SocialBox">
                    <Link to="/create">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Socials></Socials>
                </div>

            </div>
        )
    }
};

export default NavBar;