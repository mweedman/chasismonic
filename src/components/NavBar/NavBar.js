import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Socials/Socials'
import logo from '../../images/chasismonicLogo2.png'
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

                <div className="navigationLinks">
                    <ul>
                        <li>
                            <Link to='/consulting'>Offerings</Link>
                        </li>
                        <li>
                            <Link to='/artwork'>Art Shop</Link>
                        </li>
                        <li>
                            <Link to='/blog'>My Diary</Link>
                        </li>
                        <li>
                            <Link to='/aboutme'>About Me</Link>
                        </li>
                    </ul>
                </div>

                <div className="logo">
                    <Link to='/'>
                        <img src={logo}></img>
                    </Link>
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