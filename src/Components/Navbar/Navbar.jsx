import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from '../../images/main-logo.svg'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isMobile, setisMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);


  const handleClick = () => setClick(!click);
  const toggleMenu = () => setisMobile(!isMobile);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 780) {
      setisMobile(true);
      setIsDesktop(false)
    } else {
      setisMobile(false);
      setIsDesktop(true)

    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>

      <nav className="">
        <div className={`container-fluid navbar ${!isMobile ? 'view-height' : ''}`}>


          <div className="row navbar-row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="logo-portion">
                <img src={Logo} alt="logo-img" className="logo-img" />

                {isMobile && (
                  <div onClick={toggleMenu}>

                    {isMobile ? <MdMenu fill="#ffffff" /> :
                      <RxCross2 color="#fff" />}
                  </div>
                )}


              </div>

            </div>
            <div className={`col-12 col-lg-7 list-conatiner  ${!isMobile && !isDesktop ? '' : 'd-none'} `}>
              <ul className="main-list px-0">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>

                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cars" className="nav-links" onClick={closeMobileMenu}>
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">

                </li>
              </ul>


            </div>
            <div className={`col-12 col-lg-2  justify-content-center align-items-center ${isMobile && !isDesktop ? 'd-flex' : 'd-none'}`}>
              <Button className="custom-btn" title="Get a Qoute" />

            </div>
          </div>
        </div>
        <div className={`container-fluid navbar desktop-view ${!isMobile && !isDesktop ? 'd-none' : 'd-flex'}`}>


          <div className="row navbar-row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="logo-portion">
                <img src={Logo} alt="logo-img" className="logo-img" />
                {isMobile ? <MdMenu fill="#ffffff" /> :
                  <RxCross2 color="#fff" />}


              </div>

            </div>
            <div className="col-12 col-lg-7 list-conatiner  ">
              <ul className="main-list px-0">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>

                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cars" className="nav-links" onClick={closeMobileMenu}>
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">

                </li>
              </ul>


            </div>
            <div className="col-12 col-lg-2 d-flex justify-content-center align-items-center">
              <Button className="custom-btn" title="Get a Qoute" />

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
