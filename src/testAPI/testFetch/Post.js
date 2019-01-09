import React from 'react'

const Post = (props) => {
    return (
        <div>
            <img src="http://placeimg.com/100/100/tech" alt="dummy"/>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Post