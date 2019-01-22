import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
  render() {
    // const { count } = this.state
    const { count, handleCounter } = this.props
    return (
      <div>
        <h4 onMouseOver={handleCounter}>total {count}</h4>
      </div>
    )
  }
}

export default WithCounter(HoverCounter)