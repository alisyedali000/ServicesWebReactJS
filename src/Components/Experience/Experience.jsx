import React from 'react'
import Button from '../button/button'
const Experience = () => {
    return (
        <div className='container-fluid experience-container'>
            <div className="row">
                <div className="col-4 p-4">
                    <h2>
                        Ready to Experience premium Care?
                    </h2>
                </div>
                <div className="col-4 p-4">
                    <h6 className='text-gray text-center'>
                        Schedule Your free visit
                    </h6>
                </div>
                <div className="col-4 p-4">
                    <Button className='experience-btn fw-bold' title='Yes, Schedule a visit' />
                </div>
            </div>

        </div>
    )
}

export default Experience