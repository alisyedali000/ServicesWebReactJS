import React from 'react'
import electricalImg from '../../images/electrical.png'
import Detail from '../../Components/Detail/Detail'
const Dynamic = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-8 d-flex align-items-center">
                        <div className="p-4">
                            <h1>Electrical</h1>
                            <p className='text_yellow'>Ensure Safety and Reliability with Our Premier Electrical Solutions </p>
                            <p className='text-dynamic my-5'>We understand the inconvenience of multiple visits to resolve maintenance issues. Our certified professionals plan meticulously, ensuring they have all the necessary tools and materials on hand. Whether it’s AC, plumbing, or electrical work, our team is equipped to handle it all in a single visit.</p>
                            {/* <p>
                                Our experts thoroughly inspect your electrical systems to identify any issues. After the inspection, you will receive a detailed quote outlining the required parts, labor duration, and any necessary access to the systems. Once you approve the quote, our technicians will visit your home with specialized equipment to resolve the issues, ensuring your electrical systems are safe and reliable.
                            </p> */}
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <img src={electricalImg} alt="" className='  dynamic-img' width={100} />

                    </div>
                </div>
            </div>
            <Detail />

        </div>
    )
}

export default Dynamic