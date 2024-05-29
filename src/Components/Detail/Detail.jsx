import React from 'react'

const Detail = ({ data }) => {
    return (
        <div className='container poppin'>
            <div className="row">
                {data.map((item) => (
                    <div className="col-sm-3 col-12 text-center text-sm-start p-2 rounded">
                        <div className='h-100 rounded' style={{background: "#E4E4E4", padding:"1rem"}}>
                        <img src={'http://localhost:3000' + item.icon} alt={item.title} style={{height:"2.5rem"}} />
                        <div className='my-2 h-100'>
                            <p  style={{fontSize: "1.5rem", fontWeight:"600"}}>{item.title}</p>
                            <p className='detail-grid-text mt-auto' style={{ fontSize: "1.125rem", fontWeight: "500", marginTop: '1rem' }}>{item.description}</p>
                        </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Detail