import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

class Content extends React.Component {

    render(){
        return(
            <div className="contentContainer">

                <div className="heroQuote">
                    <h3>
                        "To TRULY know the world, look deep within your own being. 
                        To TRULY know yourself, take a real interest in the world."
                        - Rudolf Steiner
                    </h3>
                </div>

                <div className="linksContainer">
                    <div className='contentLink'>
                        <Link to='/consulting'>COACHING/CONSULTATION</Link>
                    </div>
                    <div className='contentLink'>
                        <Link to='/classes'>CLASSES</Link> 
                    </div>
                    <div className='contentLink'>
                        <Link to='/artwork'>ART SHOP</Link>
                    </div>
                </div>

                <div className="">

                </div>

            </div>
        )
    }
}

export default Content;