import React from 'react';
import BookMark1 from '../../images/bookmark1.png';
import BookMark2 from '../../images/bookmark2.png';
import BookMark3 from '../../images/bookmark3.png';
import BookMark4 from '../../images/bookmark4.png';

const qualitiesData = [
  {
    img: BookMark1,
    title: 'Premium Quality',
    text: 'We provide exceptional maintenance for high-end villas. Our attention to detail ensures your home stays in excellent condition, reflecting its luxury and sophistication.',
  },
  {
    img: BookMark2,
    title: 'Exceptional Experience',
    text: 'We understand the trust and quality expected by residents of elite properties. 888 Services consistently exceeds customer expectations, ensuring superior and reliable service every time.',
  },
  {
    img: BookMark3,
    title: 'Smart Solutions',
    text: 'Our mobile app provides unmatched access to our system, giving customers full visibility of their property. Track requests, access asset information, and view scheduled maintenance.',
  },
  {
    img: BookMark4,
    title: 'International Standards',
    text: 'We adhere to international standards and our rigorous staff training ensures top-quality service delivery.',
  },
];

const Qualities = () => {
  return (
    <div className='container quality-container' style={{textAlign: "-webkit-center"}}>
      <div className="row bg-black  px-2  rounded">
        {qualitiesData.map((quality, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-3 card-container text-center px-0 pt-5 pb-5 pb-2 ">
            <div className="card border-0 d-flex align-items-center text-align-center bg-black" >
              <img src={quality.img} alt={quality.title} style={{height: "2.5rem"}}/>
              <div className="card-body text-center px-3 py-0  " style={index != qualitiesData.length-1 && window.innerWidth > 700 ? {borderRight: ".3px solid #5A5A5A", height: "fit-content"}: {}}>
                <p className="card-title quitos pb-3 pt-3" style={{fontSize:"1.3rem", color:"#BCBCBC"}}>{quality.title}</p>
                <p className="card-text lato" style={{color: "#5A5A5A"}}>{quality.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualities;
