import React from 'react'
import Iphone from '../../images/iphone.png'
import StoreImg from '../../images/playstore.png'
import Button from '../button/button'

const Away = () => {
    return (
        <div className='tap-container'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Iphone} alt="" className='iphone-img img-fluid' />
                    </div>
                    <div class="col-sm-12 col-lg-6 center-content">
                        <div class="p-4">
                            <h1 className='text-white'>One Tap Away!</h1>
                            <p className='my-4 text-away'>Be in control of your home
                                care with complete transparency</p>
                            {/* <div class="trip-btn">
                                <p class="custom-btn-title border-0">Download App Now?</p>
                            </div> */}
                            <Button className='away-btn' title='Download App Now?' />
                            <div className='my-5'>
                                <img src={StoreImg} alt="" className='my-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Away