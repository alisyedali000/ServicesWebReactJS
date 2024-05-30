import React from 'react'
import Button from '../button/button'
import VanImg from '../../images/van.png'
import a from "../../images/curve.png"
const Trip = () => {
    return (
        <div className='bg-white ps-5'>
            <div className="row">
                <div className="col-sm-12 col-lg-6 center-content">
                    <div className="p-4">
                        <h1 style={{fontFamily: "Inter" , fontSize: "70px", fontWeight: "400"}}>One Trip, One Fix</h1>
                        <p className="gray" style={{fontSize: "25px", fontWeight: "400", fontFamily: "Poppins"}}>We understand the inconvenience of multiple visits to resolve maintenance issues. Our certified professionals plan meticulously, ensuring they have all the necessary tools and materials on hand. Whether it’s AC, plumbing, or electrical work, our team is equipped to handle it all in a single visit.</p>
                        {/* <div className="">
                            <p className="custom-btn-title"></p>
                        </div> */}
                        <Button title='See how Do it?' className='trip-btn' />
                    </div>
                </div>


                <div className="col-sm-12 col-lg-6 position-relative trip-imges text-end">
                    <img src={VanImg} alt="" className='van-img' />
                    <img src={a} alt='asas' className='img-fluid' />
                </div>
            </div>


        </div>
    )
}

export default Trip