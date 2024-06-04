import React, { useEffect, useRef, useState } from 'react'
import img from "../../images/baneer-img.png"
import "./index.css"

const Banner = () => {
    const containerRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState('');

  useEffect(() => {
    const updateMaxWidth = () => {
      if (containerRef.current) {
        let computedStyle = window.getComputedStyle(containerRef.current);
        computedStyle = (+window.innerWidth - parseInt(computedStyle.maxWidth, 10)) / 2
        setMaxWidth(computedStyle);
      }
    };

    updateMaxWidth();
    window.addEventListener('resize', updateMaxWidth);

    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, []);
  console.log(maxWidth, parseInt(maxWidth, 10), window.innerWidth, )
    return (
        <div className='d-flex align-items-center' style={{position: "relative"}}>
            <img src={img} className='w-100'/>
            <div   style={{position: "absolute", left:`${maxWidth}px`}}>
            <div className='container ' ref={containerRef} >
                <div className="row align-items-center" >
                    <div className="col-12 text-start">
                        <h1 className='quality-text quitos'>Premium Quality <br />
                            Maintenance Service</h1>
                        <small className='small-text'>
                            Delivering Top-Quality Service for Luxury Homes in the UAE
                        </small>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner