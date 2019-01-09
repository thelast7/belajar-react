import React, {Component} from 'react'

class EventBind4 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            message: 'latihan latihan'
        }
    }

    clickHandler4 = () => {
        this.setState({
            message: 'suksess'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler4}>
                    click
                </button>
            </div>
        )
    }
}

export default EventBind4