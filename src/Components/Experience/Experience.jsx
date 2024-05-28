import React from 'react'
import Button from '../button/button'
const Experience = () => {
    return (
        <div className='experience-container'>
            <div className='container '>
                <div className="row">
                    <div className="col-sm-12 col-lg-4 text-center p-4">
                        <h2>
                            Ready to Experience premium Care?
                        </h2>
                    </div>
                    <div className="col-sm-12 col-lg-4 text-center p-4">
                        <h6 className='text-experience text-center'>
                            Schedule your free visit
                            and receive a custom quote.
                        </h6>
                    </div>
                    <div className="col-sm-12 col-lg-4 text-center p-4">
                        <Button className='experience-btn fw-medium' title='Yes, Schedule a visit' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience