import React from 'react'
import Button from '../button/button'
const Experience = () => {
    return (
        <div style={{ background: "#EF960B", padding: "50px 0" }}>
            <div className='container container-fluid'>
                <div className='row d-sm-flex align-items-sm-center justify-content-sm-between text-center text-sm-start'>
                    <div className='col-sm-6 col-12'>
                        <h1 className='quitos fw-light' style={{ fontSize: "4.375rem", lineHeight: "normal" }}>Ready to Experience premium Care?</h1>
                    </div>
                    <div className='col-sm-4 col-12 poppin'>
                        <p className="gray" style={{ fontSize: "1.56rem" }}>Schedule your free visit
                            and receive a custom quote.</p>
                    </div>
                    <div className='col-sm-2 col-12 text-sm-end poppin'>
                        <Button className='btn btn-white border-0 bg-white py-2' style={{ borderRadius: "1.56rem", fontSize: "1.1rem" }} title='Yes, Schedule a visit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience