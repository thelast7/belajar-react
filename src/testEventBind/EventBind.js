import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state= {
            message: 'latihan approach'
        }
    }

    clickHandler(){
        this.setState({
            message: 'sukses'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>click</button>
            </div>
        )
    }
}

export default EventBind