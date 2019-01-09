import React from 'react'

const BlogPost = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default BlogPost