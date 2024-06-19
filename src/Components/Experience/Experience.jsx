import React from "react";
import Button from "../button/button";
const Experience = () => {
  return (
    <div style={{ background: "#EF960B", padding: "50px 0" }}>
      <div className="container">
        <div className="row d-sm-flex align-items-sm-center justify-content-sm-between text-center text-sm-start">
          <div className="col-sm-6 col-12">
            <p
              className="quitos fw-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: "revert-layer",
              }}
            >
              Ready to Experience premium Care?{" "}
            </p>
          </div>
          <div className="col-sm-4 col-12 poppin">
            <p className="gray" style={{ fontSize: "1.3rem" }}>
              Schedule your free visit and receive a custom quote.
            </p>
          </div>
          <div className="col-sm-2 col-12 text-sm-end poppin">
            <Button
              className="btn btn-white bg-white"
              style={{
                borderRadius: "1.56rem",
                fontSize: "1.1rem",
                width: "100%", // Adjust the width as needed
                height: "auto", // Let height adjust based on content
                maxWidth: "260px", // Set a maximum width if needed
              }}
              title="Yes, Schedule a visit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
