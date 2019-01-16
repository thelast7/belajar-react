import React from 'react'

const IniFunctionComp = ({mhs, hapusMhs}) => {
    // const { mhs } = props //bisa akses lewat sini atau si ({mhs}) diubah lagi jadi (props)
    const listMhs = mhs.map(mh => { //mh disini adalah array baru kaya foreach php nama as nam
        return (
            <div key={mh.id}>
                <h3>nama : {mh.nama}</h3>
                <h3>umur : {mh.umur}</h3>
                <button onClick={() => {hapusMhs(mh.id)}}>hapus</button>
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