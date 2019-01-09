import React, { Component, Fragment } from 'react'
import Post from './Post'

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json=>{
            this.setState({
                post: json
            })
        })
    }

    render() {
        return (
            <Fragment>
                <h1>blog post</h1>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                        // return <Post />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost