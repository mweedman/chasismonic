import React from 'react';
import NavBar from '../../NavBar/NavBar'
import BlogFeed from '../../Blogfeed/Blogfeed'

class Blog extends React.Component {

    render(){

        return(
            <div>
                <NavBar></NavBar>
                <BlogFeed />
            </div>
        )
    }
}

export default Blog;