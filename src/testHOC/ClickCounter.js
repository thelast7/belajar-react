import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
  render() {
    // const { count } = this.state
    const { count, handleCounter } = this.props
    return(
      <div>
        <button onClick={handleCounter}>tekan {count} kali</button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter)