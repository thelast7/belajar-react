import React, { Component } from 'react'

class Tambah2 extends Component {
    constructor(props){
        super(props)
        this.state= {
            count: 0
        }
    }

    nilaiBertambah(){
        this.setState({
            count: this.state.count +1
        })
    }

    nilaiBerkurang(){
        if(this.state.count > 0){
            this.setState({
                count: this.state.count -1
            })
        }

    }

    render(){
        return (
            <div>
                <button onClick={() => this.nilaiBertambah()}>tambah</button>
                <h1>angka : {this.state.count}</h1>
                <button onClick={() => this.nilaiBerkurang()}>kurang</button>
            </div>
        )
    }
}

export default Tambah2