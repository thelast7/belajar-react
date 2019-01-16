import React, { Component } from 'react'
// import TernaryFunc from '../ternaryFunctionComp/TernaryFunc';
import IniFunctionComp from './IniFunctionComp'
import AddMhs from '../functionAsProps/AddMhs'

class IniClassComp extends Component {
    state = {
        mhs : [
            {nama: 'takim', umur: 25, id:1},
            {nama: 'putri', umur:23, id:2}
        ]
    }
    tambahMhs = (mh) => {
        mh.id = Math.random()
        let mhs = [...this.state.mhs, mh]
        this.setState({
            mhs:mhs
        })
    }
    render () {
        return (
            <div>
                <IniFunctionComp mhs={this.state.mhs} />
                {/* <TernaryFunc mhs={this.state.mhs} /> */}
                <AddMhs AddMhs={this.tambahMhs} />
            </div>
        )
    }
}

export default IniClassComp