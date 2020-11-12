import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'


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
