import React from 'react'

const Services = ({ title, text }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='quality-text'>{title}</h1> 
                </div>
            </div>
        </div>
    )
}

export default Services