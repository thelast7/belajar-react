import React, { Component } from 'react'
import BlogChild from './BlogChild'

class Blog extends Component {
    state ={
        post: []
    }

    // constructor(props) {
    //     super(props)
    //     this.state= {
    //         post: []
    //     }
    // }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState ({
                post: json
            })
        })
    }

    render() {
        return (
            <div>
                <h1>blogggg</h1>
                    {
                        this.state.post.map(post=> {
                            return <BlogChild key={post.id} title={post.title} desc={post.body} />
                        })
                    }
            </div>
        )
    }
}

export default Blog