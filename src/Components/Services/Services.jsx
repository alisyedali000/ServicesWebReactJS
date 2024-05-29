import React from 'react'

const Services = ({ title, text }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='inter' style={{textDecoration: "underline", textDecorationColor: "#D3D3D3"}}>{title}</h1>
                    
                    <p className='text-services'>{text}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Services