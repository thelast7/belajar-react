import React from 'react'

const TernaryFunc = ({mhs}) => {
    return(
        <div>
            {
                mhs.map(mh => {
                    return mh.umur < 25 ? (
                        <div key={mh.id}>
                            <div>nama : {mh.nama}</div>
                            <div>umur : {mh.umur}</div>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default TernaryFunc