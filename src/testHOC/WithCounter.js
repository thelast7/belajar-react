import React from 'react'

const WithCounter = OriComponent => {
  class WithCounter extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        count: 0
      }
    }

    handleCounter = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }

    render() {
      return (
        <OriComponent
          count={this.state.count}
          handleCounter={this.handleCounter}
        />
      )
    }
  }
  return WithCounter
}

export default WithCounter