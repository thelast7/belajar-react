import React, { Component } from 'react'

const Hello = props => {
    return (
        <div>
            <h1>Helo {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Hello