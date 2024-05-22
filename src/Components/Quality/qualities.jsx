import React from 'react'
import BookMark1 from '../../images/bookmark1.png'
import BookMark2 from '../../images/bookmark2.png'
import BookMark3 from '../../images/bookmark3.png'
import BookMark4 from '../../images/bookmark4.png'
const Qualities = () => {
    return (
        <div className='container quality-container'>
            <div className="row bg-black">
                <div className="col-3 h-50">
                    <div className="card border-0 d-flex align-items-center text-align-center bg-black" style={{ width: '18rem' }}>
                        <img src={BookMark1} className="card-img-top" alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Premium Quality</h5>
                            <p className="card-text">We provide exceptional maintenance for high-end villas. Our attention to detail ensures your home stays in excellent condition, reflecting its luxury and sophistication</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 h-50">
                    <div className="card border-0 d-flex align-items-center text-align-center bg-black" style={{ width: '18rem' }}>
                        <img src={BookMark2} className="card-img-top" alt='' />
                        <div className="card-body">
                            <h5 className="card-title">Exceptional Experience</h5>
                            <p className="card-text">We understand the trust and quality expected by residents of elite properties. 888 Services consistently exceeds customer expectations, ensuring superior and reliable service every time.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 h-50">
                    <div className="card border-0 d-flex align-items-center text-align-center bg-black" style={{ width: '18rem' }}>
                        <img src={BookMark3} className="card-img-top" alt='' />
                        <div className="card-body">
                            <h5 className="card-title"> Smart Solutions</h5>
                            <p className="card-text">Our  mobile app provides unmatched access to our system, giving customers full visibility of their property. Track requests, access asset information, and view scheduled maintenance</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 h-50">
                    <div className="card border-0 d-flex align-items-center text-align-center bg-black" style={{ width: '18rem' }}>
                        <img src={BookMark4} className="card-img-top" alt='' />
                        <div className="card-body">
                            <h5 className="card-title"> International Standards</h5>
                            <p className="card-text">We adhere to international standards and our rigorous staff training ensures top-quality service delivery.  </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Qualities