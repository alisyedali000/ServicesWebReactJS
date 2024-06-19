
import React from "react";
import Button from "../button/button";
import curv from "../../images/curve.png";
import van from "../../images/updatedVan.png";
import "./Trip.css"

const Trip = () => {
  return (
    <div className="bg-white ps-5">
      <div className="row one-trip-row">
        <div className="col-sm-12 col-lg-6 center-content">
          <div className="p-4" style={{ width: "80%" }}>
            <h1 style={{ fontFamily: "Quitos", fontWeight: "400" }}>
              One Trip, One Fix
            </h1>
            <p
              className="gray"
              style={{
                fontSize: "1.4rem",
                fontWeight: "400",
                fontFamily: "Poppins",
              }}
            >
              We understand the inconvenience of multiple visits to resolve
              maintenance issues. Our certified professionals plan meticulously,
              ensuring they have all the necessary tools and materials on hand.
              Whether it’s AC, plumbing, or electrical work, our team is
              equipped to handle it all in a single visit.
            </p>
            {/* <div className="">
                            <p className="custom-btn-title"></p>
                        </div> */}
            <div style={{ marginTop: 40 }}>
              <Button
                title="See how we do  it?"
                className="trip-btn fw-semibold pt-1"
              />
            </div>
          </div>
        </div>

        <div
          className="col-sm-12 col-lg-6 position-relative trip-imges text-end"
          style={{ position: "relative" }}
        >
          <img
            src={curv}
            alt="asas"
          className="curve"
          />
          <img
            src={van}
            alt="van"
            className="overlay-img van"
          />

        </div>
      </div>
    </div>
  );
};

export default Trip;
