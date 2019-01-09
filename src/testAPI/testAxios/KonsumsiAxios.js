import React, { Component } from 'react'
import BlogPost from './BlogPost'
import axios from 'axios'

class KonsumsiAxios extends Component {
    state = {
        blog: []
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            this.setState({
                blog: result.data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.blog.map(blog => {
                        return <BlogPost key={blog.id} title={blog.title} desc={blog.body}/>
                    })
                }
            </div>
        )
    }
}

export default KonsumsiAxios