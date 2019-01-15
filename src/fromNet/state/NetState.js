import React from 'react'

class NetState extends React.Component {
    state = {
        name : 'takim',
        umur : 25
    }

    handleCopy (e) {
        alert('dont')
    }

    render() {
        return (
            <div>
                <h1>nama {this.state.name} umur {this.state.umur}</h1>
                <p onCopy={this.handleCopy}>awkdawk dkawawdkawk akwdkawdk wakdkawdkaw kdaw</p>
            </div>
        )
    }
}

export default NetState