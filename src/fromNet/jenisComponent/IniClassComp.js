import React, { Component } from 'react'
import TernaryFunc from '../ternaryFunctionComp/TernaryFunc';
// import IniFunctionComp from './IniFunctionComp'

class IniClassComp extends Component {
    state = {
        mhs : [
            {nama: 'takim', umur: 25},
            {nama: 'putri', umur:23}
        ]
    }
    render () {
        return (
            <div>
                {/* <IniFunctionComp mhs={this.state.mhs} /> */}
                <TernaryFunc mhs={this.state.mhs} />
            </div>
        )
    }
}

export default IniClassComp