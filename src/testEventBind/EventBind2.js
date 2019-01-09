import React, { Component } from 'react'

class EventBind2 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            message : 'latihan lagi'
        }
    }

    clickHandler2 (){
        this.setState ({
            message: 'sukses'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler2()}>
                    click
                </button>
            </div>
        )
    }
}

export default EventBind2