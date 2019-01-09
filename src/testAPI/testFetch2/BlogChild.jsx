import React from 'react'

const BlogChild = (props) => {
    return (
        <div>
            <img src="http://placeimg.com/200/200/nature" alt="dummy"/>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default BlogChild