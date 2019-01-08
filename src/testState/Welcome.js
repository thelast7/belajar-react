import React, { Component } from 'react'

class Welcome extends Component {
    constructor () {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'thank you'
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button
                onClick={() => this.changeMessage()}
            >
                subcribe
            </button>
        </div>
        )
    }
}

export default Welcome