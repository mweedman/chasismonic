import React from 'react';
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'


class LandingView extends React.Component {
    

   render(){
    return(
        <div className="landingPage">
            <NavBar></NavBar>
            <Content></Content>
            <Footer></Footer>
        </div>
        
    )
   } 
};

export default LandingView;
