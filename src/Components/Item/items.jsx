import React from 'react'
import acImg from '../../images/ac.png'
import plumberImg from '../../images/plumber.png'
import hammerImg from '../../images/hammer.png'
import watertankImg from '../../images/watertank.png'
import pestImg from '../../images/pest.png'
import washingMachineImg from '../../images/washingmachine.png'
import paintRollerImg from '../../images/paintroller.png'
import handspadeImg from '../../images/handspade.png'
import brickImg from '../../images/brick.png'
import ropeImg from '../../images/rope.png'
import elevatorImg from '../../images/elevator.png'


const Items = () => {
    return (
        <div className='container'>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={acImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Air Conditioning</h6>
                        <p className='grid-text'>Keep your home cool</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={acImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Air Conditioning</h6>
                        <p className='grid-text'>Keep your home cool</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={plumberImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Plumbing</h6>
                        <p className='grid-text'>Reliable water flow</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={hammerImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Handyman</h6>
                        <p className='grid-text'>Fixes for your home</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={watertankImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Water Tank</h6>
                        <p className='grid-text'>Clean and healthy water</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={pestImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Pest Control</h6>
                        <p className='grid-text'>Keep pests away</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={washingMachineImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Appliances </h6>
                        <p className='grid-text'>Keep your home running</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={acImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Painting</h6>
                        <p className='grid-text'>Fresh and vibrant walls</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={acImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Air Conditioning</h6>
                        <p className='grid-text'>Keep your home cool</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={handspadeImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>LandScaping</h6>
                        <p className='grid-text'>Beautiful outdoor spaces</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={brickImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Civil Work</h6>
                        <p className='grid-text'>Strong and durable structures</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={ropeImg} alt="AC" />
                    <div className='grid-text-container'>
                        <h6 className='fw-bold'>Facade Cleaning</h6>
                        <p className='grid-text'>Sparkling clean exteriors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items