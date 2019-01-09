import React, { Component } from 'react'

class EventBind3 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            message: 'latihan terus'
        }
        this.clickHandler3 = this.clickHandler3.bind(this)
    }

    clickHandler3(){
        this.setState({
            message: 'sukses'
        })
    }

    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler3}>
                    click
                </button>
            </div>
        )
    }
}

export default EventBind3