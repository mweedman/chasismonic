import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


class Socials extends React.Component {

render(){
    return(
            
        <ul className="socials">
            <li>
                <a href="https://www.instagram.com/annederella_style/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </li>
        </ul>

    )
}
}

export default Socials;