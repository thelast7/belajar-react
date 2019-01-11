import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }

    render() {
        //short circuit
        return this.state.isLoggedIn && <h1>sukses</h1>

        // ternary operator
        // return this.state.isLoggedIn ? (<h1>sukses</h1>) : (<h1>tamu</h1>)
        // return this.state.isLoggedIn ? (
        //     <div>takim</div>
        // ) : (
        //     <div>tamu</div>
        // )

        // if else biasa
        // let pesan
        // if (this.state.isLoggedIn) {
        //     pesan = <div>sukses</div>
        // } else {
        //     pesan = <div>tamu</div>
        // }
        // return (
        //     <div>
        //         {pesan}
        //     </div>
        // )
    }
}

export default Condition