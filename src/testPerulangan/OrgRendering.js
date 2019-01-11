import React from 'react'

function OrgRendering ({org}){
    return (
        <h2>
            nama {org.nama}
            umur {org.umur}
            rumahnya di {org.rumah}
        </h2>
    )
}

export default OrgRendering