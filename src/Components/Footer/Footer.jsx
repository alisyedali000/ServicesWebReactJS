import React from "react";
import "./Footer.css";
import footerLogo from "../../images/footer-logo.png";
import storeLogo from "../../images/playstore.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const itemsData = [
    { title: "Air Conditioning" },
    { title: "Electrical" },
    { title: "Plumbing" },
    { title: "Civil Work" },
    { title: "Pest Control" },
  ];

  const generateLink = (title) => {
    return title?.toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <>
      <footer className="footer">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-logo-portion">
                <img src={footerLogo} alt="logo" className="footer-img" />
                <br />
                <p className="text-gray pt-lg-4">
                  Premium Quality <br /> Maintenance Services
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer--services align-items-md-start align-items-center ">
                <h3 className="logo-text footer-title fw-medium ps-2 ">
                  Services
                </h3>
                <ul className="footer--services-list text-gray d-flex align-items-md-start align-items-center p-0">
                  {itemsData.map((item, index) => (
                    <li key={index} className="footer--services-list-item">
                      <a
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          display: "block",
                          color: "inherit",
                        }}
                        href={`/services/${generateLink(item.title)}`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pt-sm-0 pt-4">
              <div className="footer--contact align-items-md-start align-items-center text-md-start">
                <h3 className="logo-text footer-title fw-medium ps-2">
                  Contact
                </h3>
                <ul className="footer--contact-list text-gray align-items-md-start align-items-center p-0">
                  <li className="footer-contact-item">
                    <a
                      href="tel:+97148923308"
                      className="footer-contact-item text-gray"
                      style={{ textDecoration: "none" }}
                    >
                      +971 48 923 308
                    </a>
                  </li>
                  <li className="footer-contact-item mt-0">
                    <a
                      href="tel:+971503677070"
                      className="footer-contact-item text-gray"
                      style={{ textDecoration: "none" }}
                    >
                      +971 50 367 7070
                    </a>
                  </li>

                  <br />
                  <li className="footer-contact-item">info@888services.ae</li>
                  <br />
                  <li className="footer-contact-item" style={{width:"70%"}}>
                    The Curve Building, Sheik Zayed Road, Dubai, UAE
                  </li>
                  {/* <li className="footer-contact-item">Dubai, UAE</li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 off-span-lg-4 my-5"></div>
            <div className="col-sm-12 col-md-6 col-lg-4 off-span-lg-4 my-5 text-md-start text-center">
              <div className="footer--download text-md-start text-center ">
                <h3 className="logo-text mb-3">Download us on</h3>
                <img
                  src={storeLogo}
                  className="storelogo"
                  alt="Play Store logo"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5 text-md-start text-center">
              <div className="footer--follow">
                <h3 className="mb-3">Follow us</h3>
                <div className="footer-icons text-md-start text-center">
                  <Link to={"https://www.facebook.com/888services.ae"}>
                    {" "}
                    <FaFacebookF
                      className="me-3 text-white"
                      width="2em"
                      height="2em"
                    />
                  </Link>
                  <Link to={"https://www.instagram.com/888services.ae/"}>
                    <FaInstagram
                      className="mx-3 text-white"
                      width={23}
                      height={23}
                    />
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/company/888-services-llc"}
                  >
                    <FaLinkedinIn
                      className="mx-3 text-white"
                      width={23}
                      height={23}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 text-experience my-3">
              <p>888Services. All Rights Reserved © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
