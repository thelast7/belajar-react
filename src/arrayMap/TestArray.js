import React, { Component } from 'react'

class TestArray extends Component {
    render() {
        const angka = [1, 2, 3, 4]
        const hasil = angka.map((angka => angka * 2))
        console.log(hasil)
        return (
            <div>
                <h1>test</h1>
            </div>
        )
    }
}

export default TestArray