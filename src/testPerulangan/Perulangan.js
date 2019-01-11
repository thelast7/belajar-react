import React, { Component } from 'react'

// class Perulangan extends Component {
//     render () {

//     }
// }

// function Perulangan () {
//     const nama = ['takim', 'putri', 'ghisa']
//     const listNama = nama.map(nam => <h2>{nam}</h2>)
//     return (
//         <div>
//             {listNama}
//         </div>
//     )
// }

function Perulangan() {
    const orang =
    [
        {
            nama: 'takim',
            umur: 25,
        },
        {
            nama: 'putri',
            umur: 23
        },
        {
            nama: 'ghisa',
            umur: 7
        }
    ]
    const listOrang = orang.map(org => (
    <h2>
        nama {org.nama} umur {org.umur}
    </h2>))
    return <div>{listOrang}</div>
}

export default Perulangan