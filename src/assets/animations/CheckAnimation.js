import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottieJson/checkMark.json";

function CheckmarkAnimation() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="checkmark-container">
      <Lottie options={defaultOptions} height="auto" width="100%" />
      <p className="success">
        Your enquiry has been sent. <br/>Our team will get back to you shortly.
      </p>
    </div>
  );
}

export default CheckmarkAnimation;
