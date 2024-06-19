import React, { useEffect, useRef, useState } from 'react';
import "./index.css";

const Banner = () => {
  const containerRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState('');

  useEffect(() => {
    const updateMaxWidth = () => {
      if (containerRef.current) {
        let computedStyle = window.getComputedStyle(containerRef.current);
        computedStyle = (+window.innerWidth - parseInt(computedStyle.maxWidth, 10)) / 2;
        setMaxWidth(computedStyle);
      }
    };

    updateMaxWidth();
    window.addEventListener('resize', updateMaxWidth);

    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, []);

  return (
    <div className='d-flex align-items-center banner-container' style={{ position: "relative" }}>
      <div className='banner-image'></div>
      <div style={{ position: "absolute", left: `${maxWidth}px` }}>
        <div className='container' ref={containerRef}>
          <div className='banner-title'>
            <div className="col-12 text-start px-4 px-sm-0">
              <h3 className='quality-text quitos'>Premium Quality <br />
                Maintenance Service
              </h3>
              <p className='small-text'>
                Delivering Top-Quality Service for Luxury Homes in the UAE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
