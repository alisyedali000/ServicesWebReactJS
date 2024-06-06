import React from 'react'

const Services = ({ title, text }) => {
    return (
        <div className='container py-5'>
            <div className="row px-3">
                <div className="col-12 text-center" style={!text ? {display: "flex", justifyContent: "center"} : {}}>
                    <h1 className='quitos' style={!text ? {borderBottom: "5px solid #D3D3D3", width: "max-content"} : {textDecorationColor: "#D3D3D3", fontWeight: "400"}}>{title}</h1>
                    <p className='text-services poppin fw-thin' style={{fontSize: "1.8rem"}}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Services