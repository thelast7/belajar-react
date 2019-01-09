import React, { Component } from 'react'
import axios from 'axios'
import DataMhs from './DataMhs'

class Konsumsi2 extends Component {
    state = {
        mahasiswa: []
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((result) => {
            this.setState({
                mahasiswa:result.data
            })
        })
    }

    render(){
        console.log(this.state.mahasiswa)
        return (
            <div>
                {
                    this.state.mahasiswa.map(mahasiswa=> {
                        return <DataMhs
                            key={mahasiswa.id}
                            name={mahasiswa.name}
                            user_name={mahasiswa.username}
                            email_user={mahasiswa.email}
                            phone_user={mahasiswa.phone}
                            website_user={mahasiswa.website}
                        />
                    })
                }
            </div>
        )
    }
}

export default Konsumsi2