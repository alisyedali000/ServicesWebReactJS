import React from 'react'

const Detail = ({ data }) => {
    return (
        <div className='container container-fluid poppin px-3 px-sm-0'>
            <div className="row">
                {data.map((item) => (
                    <div className="col-sm-3 col-12 text-center text-sm-start p-2 rounded">
                        <div className='h-100 rounded' style={{background: "#E4E4E4", padding:"1rem"}}>
                        <img src={window.location.origin + item.icon} alt={item.title} style={{height:"rem"}} />
                        <div className='mt-4 h-100 pb-1'>
                            <p  style={{fontSize: "1.75rem",marginBottom:"3.31rem", fontWeight:"500"}}>{item.title}</p>
                            <p className='detail-grid-text mt-auto' style={{ fontSize: "1.125rem", fontWeight: "400", marginTop: '1rem' }}>{item.description}</p>
                        </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Detail