import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import BlogFeed from '../../components/Blogfeed/Blogfeed'

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