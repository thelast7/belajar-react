import React from 'react'

const IniFunctionComp = ({mhs}) => {
    // const { mhs } = props //bisa akses lewat sini atau si ({mhs}) diubah lagi jadi (props)
    const listMhs = mhs.map(mh => { //mh disini adalah array baru kaya foreach php nama as nam
        return (
            <div key={mh.id}>
                <h3>nama : {mh.name}</h3>
                <h3>umur : {mh.umur}</h3>
            </div>
        )
    })
    return(
        <div>
            {listMhs}
        </div>
    )
}

export default IniFunctionComp