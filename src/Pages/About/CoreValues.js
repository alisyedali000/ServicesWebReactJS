import React from "react";
import a from "../../images/curve.png";
import vLogo from "../../images/v.png";
import iLogo from "../../images/i.png";
import pLogo from "../../images/p.png";
import "./CoreValues.css";

function CoreValues() {
  return (
    <div className="center-container">
      {/* <img src={a} alt="Background" className="background-image" /> */}
      <div>
        <h1 className="header-text">Our Values</h1>
        <p className="subtext">Our Commitment to Excellence</p>
      </div>
      <div className="values-container">
        <div className="value-item">
          <img src={vLogo} alt="Value" />
          <div className="value-title">VALUE</div>
          <div className="value-description">
            Providing exceptional value through high-quality maintenance
            services.
          </div>
        </div>
        <div
          className="value-item"
          style={{
            marginTop: -20,
          }}
        >
          <img
            src={iLogo}
            alt="Innovation"
            className="custom-value-img"
          />
          <div className="value-title">INNOVATION</div>
          <div className="value-description">
            Utilizing the latest technology for superior and efficient service.
          </div>
        </div>
        <div className="value-item">
          <img src={pLogo} alt="Professionalism" />
          <div className="value-title">PROFESSIONALISM</div>
          <div className="value-description">
            Ensuring excellence through comprehensive training and staff
            qualifications.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
