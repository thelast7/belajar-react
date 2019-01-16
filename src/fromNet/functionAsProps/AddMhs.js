import React, {Component} from 'react'

class AddMhs extends Component {
    state = {
        nama : null,
        umur : null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.AddMhs(this.state)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="nama">Nama</label>
                    <input type="text" id="nama" onChange={this.handleChange} />

                    <label htmlFor="umur">Umur</label>
                    <input type="text" id="umur" onChange={this.handleChange} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddMhs