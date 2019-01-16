import React from 'react'

class NetState extends React.Component {
    state = {
        name : 'takim',
        umur : 25
    }

    handleCopy (e) {
        alert('dont')
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted', this.state.name)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>nama {this.state.name} umur {this.state.umur}</h1>
                    <p onCopy={this.handleCopy}>awkdawk dkawawdkawk akwdkawdk wakdkawdkaw kdaw</p>
                    <input type="text" onChange={this.handleChange}></input>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default NetState