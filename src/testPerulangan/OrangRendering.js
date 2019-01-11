import React from 'react'
import OrgRendering from './OrgRendering';

function OrangRendering () {
    const orang =
    [
        {
            nama: 'putri',
            umur: 23,
            rumah: 'depok'
        },
        {
            nama: 'takim',
            umur: 25,
            rumah: 'jakarta'
        }
    ]
    const listOrang = orang.map(org => (
        // <h2>
        //     nama {org.nama}
        //     umur {org.umur}
        //     rumahnya di {org.rumah}
        // </h2>
        <OrgRendering org={org} />
    ))
    return <div>{listOrang}</div>
}

export default OrangRendering