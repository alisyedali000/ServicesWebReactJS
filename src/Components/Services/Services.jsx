import React from 'react'

const Services = ({ title, text }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{title}</h1>
                    <p className='text-services'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Services