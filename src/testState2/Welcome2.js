import React, { Component } from 'react'

class Welcome2 extends Component {
    constructor() {
        super()
        this.state= {
            message: 'mengulang welcome'
        }
    }

    changeMessage(){
        this.setState({
            message: 'berhasil terulang'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>
                    klik me!
                </button>
            </div>
        )
    }
}

export default Welcome2