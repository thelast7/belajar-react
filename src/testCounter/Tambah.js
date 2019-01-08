import React, { Component } from 'react'

class Tambah extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    nilaiBertambah(){
        this.setState ({
            count: this.state.count +1
        })
    }

    render() {
        return(
            <div>
                <h1>Nilai : {this.state.count}</h1>
                <button onClick={()=> this.nilaiBertambah()}>Tambah</button>
            </div>
        )
    }
}

export default Tambah