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
  // const [button, setButton] = useState(true);
  const [isMobile, setisMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCross, setshowCross] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownServices, setdropdownServices] = useState(false)
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleServiceDropdown = () => {
    setdropdownServices(!dropdownServices);
  };



  // const toggleMenu = () => {
  //   setisMobile(!isMobile)

  // };
  // const toggleIcon = () => {
  //   setIsMenuOpen(!isMenuOpen);

  // };
  const handleCategories = () => {
    setShowMenu(!showMenu);
    setshowCross(!showCross);


  };


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
        <div className={`container-fluid navbar ${showMenu ? 'view-height' : ''}`}>


          <div className="row navbar-row mobile-navbar">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="logo-portion">
                <img src={Logo} alt="logo-img" className="logo-img" />

                {isMobile && (
                  <div onClick={handleCategories}>

                    {showCross ? <RxCross2 color="#fff" /> : <MdMenu fill="#ffffff" />}

                  </div>
                )}



              </div>

            </div>
            <div className={`col-12 col-lg-7 list-conatiner  ${showMenu ? '' : 'd-none'} `}>
              <ul className="main-list px-0">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>

                </li>
                <li className="nav-item position-relative">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={toggleDropdown}
                  >
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                  {dropdownVisible && (
                    <ul className="d-flex flex-column dropdown-list" >
                      <li><a class="dropdown-item " href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={toggleServiceDropdown}>
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                  {dropdownServices && (
                    <ul className="d-flex flex-column dropdown-list" >
                      <li><a class="dropdown-item " href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">

                </li>
              </ul>


            </div>
            <div className={`col-12 col-lg-2  ${showMenu ? 'd-flex' : 'd-none'} justify-content-center align-items-center  `}>
              <Button className="custom-btn" title="Get a Qoute" />

            </div>
          </div>
        </div>


        <div className={`container-fluid navbar desktop-view `}>
          <div className="row navbar-row desktop-navbar">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="logo-portion">
                <img src={Logo} alt="logo-img" className="logo-img" />
              </div>

            </div>
            <div className="col-12 col-lg-7 list-conatiner  ">
              <ul className="main-list px-0">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>

                </li>
                <li className="nav-item position-relative">
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={toggleDropdown}
                  >
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                  {dropdownVisible && (
                    <ul className="d-flex flex-column dropdown-list" >
                      <li><a class="dropdown-item " href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-links" onClick={toggleServiceDropdown}>
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />

                  </Link>
                  {dropdownServices && (
                    <ul className="d-flex flex-column dropdown-list" >
                      <li><a class="dropdown-item " href="/services/air-conditioning">Air Conditioning</a></li>
                      <li><a class="dropdown-item" href="/services/electrical">Electrical</a></li>
                      {/* <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li> */}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
