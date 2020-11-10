import React from 'react';

class BlogEntry extends React.Component {

    render() {

        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
            </div>
        )
    }
}

export default BlogEntry;