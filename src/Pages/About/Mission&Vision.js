import React from "react";
import missionIcon from "../../images/Misson.png";
import visionIcon from "../../images/vision.png";
import background from "../../images/curve.png";
import "./MissionVision.css";

function MissionVision() {
  return (
    <div className="page-container">
      {/* <img src={background} alt="Background" className="background-image" /> */}
      <div className="content-container">
        <div className="mission">
          <img src={missionIcon} alt="Mission Icon" className="icon" />
          <h1>Mission</h1>
          <p>
            Delivering premium quality home maintenance for high-end properties
            in the UAE with exceptional care through trained, qualified staff
            and advanced technology.
          </p>
        </div>
        <div className="vision" style={{marginTop:40}}>
          <img src={visionIcon} alt="Vision Icon" className="icon" />
          <h1>Vision</h1>
          <p>
            To be the leading provider of premium home maintenance services in
            the UAE, ensuring the best customer experience through exceptional
            care and integrated technological solutions within FM best
            practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
