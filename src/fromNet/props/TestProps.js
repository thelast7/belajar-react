import React, { Component } from 'react'

class TesProps extends Component {
    render () {
        const {nama, umur} = this.props
        return (
            <div>
                <h3>nama : { nama }</h3>
                <h3>umur : { umur }</h3>
            </div>
        )
    }

}

export default TesProps