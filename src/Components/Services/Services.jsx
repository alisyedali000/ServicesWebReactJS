import React from 'react'

const Services = ({ title, text }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='quitos' style={{textDecorationColor: "#D3D3D3", fontWeight: "400"}}>{title}</h1>
                    
                    <p className='text-services poppin fw-thin' style={{fontSize: "30px"}}>{text}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Services