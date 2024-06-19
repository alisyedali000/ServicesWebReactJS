import React from "react";
import Button from "../../Components/button/button";
import storeLogo from "../../images/playstore.png";
import a from "../../images/curve.png";
import van from "../../images/updatedVan.png";
import "./888Services.css";
function Services() {
  return (
    <>
      <div className="bg-white">
        <div className="row">
          <div className="col-sm-12 col-lg-6 center-content">
            <div
              style={{
                padding: 100,
                marginTop: -20,
              }}
            >
              <h1
                style={{
                  fontFamily: "'Quitos', sans-serif",
                  fontSize: "70px",
                  fontWeight: "400",
                }}
              >
                888 Services
              </h1>
              <p
                style={{
                  marginTop: "-10px",
                  marginBottom: "150px",
                  color: "#EF960B",
                  fontSize: "1.5rem",
                }}
              >
                Premium Quality Maintenance Service
              </p>
              <p
                className="gray"
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                At 888 Services, we make home maintenance easy and hassle-free.
                Our dedicated team handles all your needs in one visit, from
                fixing air conditioning, plumbing, and electrical issues to
                painting and handyman tasks. We use the latest tools and
                techniques to ensure every job is done right the first time. Our
                certified technicians are trained to provide high-quality
                service, ensuring your home remains comfortable and
                well-maintained.
              </p>
              <p
                className="gray"
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                At 888 Services, we are committed to providing exceptional home
                maintenance services in the UAE. Our mission is to meet all your
                needs with one visit, leveraging technology to offer the best
                customer experience. We aim to build lasting relationships by
                delivering reliable, high-quality services every time.{" "}
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6 position-relative trip-imges text-end">
            <img
              src={a}
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
      <div style={{ background: "#EF960B", padding: "50px 0" }}>
        <div className="container">
          <div className="row d-sm-flex align-items-sm-center justify-content-sm-between text-center text-sm-start">
            <div className="col-sm-6 col-12">
              <p
                className="quitos fw-light"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "normal",
                }}
              >
                Ready to Start?
              </p>
            </div>
            <div className="col-sm-4 col-12 poppin">
              <p className="gray" style={{ fontSize: "1.56rem" }}>
                Book via our app or website today!
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
                title="Book Now"
              />
              <div
                style={{
                  margin: "1.125rem 0",
                  paddingRight: "10px",
                }}
              >
                <img
                  src={storeLogo}
                  className="storelogo"
                  alt="Play Store logo"
                  style={{ height: "2rem", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
