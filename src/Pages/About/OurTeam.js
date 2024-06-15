// src/App.js
import React from "react";
import "./OurTeam.css";
import hamzaImage from "../../images/teamMember.png"; // Ensure you have the image in your src folder or import correctly
import a from "../../images/curve.png";
const OurTeam = () => {
  return (
    <>
      <img src={a} alt="Background" className="background-image" />
    <div className="container">
      <h1 className="title">Our Team</h1>
      <p className="subtitle">
        Meet the 888 Services experts behind the scenes!
      </p>
      <div className="team-container">
        <div className="member-card">
          <img src={hamzaImage} alt="Hamza" />
        </div>
        <div className="member-card">
          <img src={hamzaImage} alt="Hamza" />
        </div>
      </div>
      <div className="team-container">
        <div className="member-card">
          <img src={hamzaImage} alt="Hamza" />
        </div>
        <div className="member-card">
          <img src={hamzaImage} alt="Hamza" />
        </div>
      </div>
    </div>
    </>
  );
};

export default OurTeam;
