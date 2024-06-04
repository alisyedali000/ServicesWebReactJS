import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../button/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from '../../images/main-logo.svg';
import NavbarCar from '../../images/navbar-car.svg';

import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showCross, setshowCross] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownServices, setdropdownServices] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setdropdownServices(false)
  };

  const toggleServiceDropdown = () => {
    setdropdownServices(!dropdownServices);
    setDropdownVisible(false);
  };

  const handleCategories = () => {
    setShowMenu(!showMenu);
    setshowCross(!showCross);
  };
const handleMobileNavClose = () => {
  setShowMenu(false);
  setshowCross(false);
}
  const closeMobileMenu = () => {
    setClick(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 780) {
      setisMobile(true);
      setIsDesktop(false);
    } else {
      setisMobile(false);
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const generateLink = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const itemsData = [
    { title: 'Air Conditioning' },
    { title: 'Electrical' },
    { title: 'Plumbing' },
    { title: 'Handyman' },
    { title: 'Water Tank' },
    { title: 'Pest Control' },
    { title: 'Appliances' },
    { title: 'Painting' },
    { title: 'LandScaping' },
    { title: 'Civil Work' },
    { title: 'Facade Cleaning' },
    { title: 'Elevators' },
  ];

  const isService = itemsData.find(({title}) => `/services/${generateLink(title)}` == window.location.pathname)
  const dropdownItems = [
    "Action",
    "Another action",
    "Something else here",
    "Separated link"
  ];
  return (
    <nav className="">
      <div className={`container-fluid navbar ${showMenu ? 'view-height' : ''}`} style={{"--bs-navbar-padding-y": "0"}}>
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
          <div className={`col-12 col-lg-7 list-container ${showMenu ? '' : 'd-none'}`}>
            <ul className="main-list px-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink to="/about" className="nav-links" activeClassName="active" onClick={toggleDropdown}>
                  About us
                  {/* <MdOutlineKeyboardArrowDown fill="#ef960b" /> */}
                </NavLink>
                {/* {dropdownVisible && (
                  <ul className="d-flex flex-column dropdown-list">
                    {dropdownItems.map((item, index) => (
                      <li key={index}>
                        <a className="dropdown-item" href="#" onClick={()=>{closeMobileMenu();handleMobileNavClose()}}>{item}</a>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-links" activeClassName="active" onClick={toggleServiceDropdown}>
                  Services
                  <MdOutlineKeyboardArrowDown fill="#ef960b" />
                </NavLink>
                {dropdownServices && (
                  <ul className="d-flex flex-column dropdown-list">
                    {itemsData.map((item) => (
                      <li key={item.title}>
                        <NavLink
                          to={`/services/${generateLink(item.title)}`}
                          className="dropdown-item"
                          activeClassName="active"
                          onClick={()=>{closeMobileMenu();handleMobileNavClose()}}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={`col-12 col-lg-2 ${showMenu ? 'd-flex' : 'd-none'} justify-content-center align-items-center`}>
            <Button className="custom-btn" title="Get a Quote" />
          </div>
        </div>
      </div>

      <div className="navbar desktop-view" style={{"--bs-navbar-padding-y": "0"}}>
        <div className="bg-white w-100 d-sm-block d-none">
          <div className="container py-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-start">
                <img src={NavbarCar} alt="logo-img" />
                <p className="mb-0 ps-2 poppin" style={{fontSize: "14px"}}>24x7 Emergency Response</p>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <p  className="m-0 poppin" style={{fontSize: "14px",paddingRight: "3.19rem"}}>04-892 3308</p>
                <div style={{display: "flex", columnGap: "20px", paddingRight: "20px"}}>
                  <Link to={'https://www.facebook.com/888services.ae'}> <img src={window.location.origin + '/images/Navbar/f.png'} style={{width: "17px"}}/></Link>
                   <Link to={'https://www.instagram.com/888services.ae/'}><img src={window.location.origin + '/images/Navbar/i.png'} style={{width: "17px"}}/></Link>
                  <Link to={'https://www.linkedin.com/company/888-services-llc'}><img src={window.location.origin + '/images/Navbar/l.png'} style={{width: "17px"}}/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <div className="row navbar-row desktop-navbar" style={{'--bs-gutter-x': '0'}}>
            <div className="col-12 col-md-3 col-lg-3">
              <div>
                <img src={Logo} alt="logo-img" />
              </div>
            </div>
            <div className="col-12 col-lg-7 list-container d-flex justify-content-end align-items-center" >
              <ul className="main-list px-0" style={{columnGap: "1rem"}}>
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item position-relative">
                  <NavLink to="/about" className="nav-links" activeClassName="active" onClick={toggleDropdown}>
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />
                  </NavLink>
                </li>
                <li className="nav-item" >
                  <Link className={ isService?.title ? 'nav-links active': 'nav-links'}  onClick={toggleServiceDropdown}>
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />
                  </Link>
                  {dropdownServices && (
                    <ul className="d-flex flex-column dropdown-list">
                      {itemsData.map((item) => (
                        <li key={item.title}>
                          <NavLink
                            to={`/services/${generateLink(item.title)}`}
                            className="dropdown-item"
                            onClick={closeMobileMenu}
                            onBlur={toggleServiceDropdown}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-links" activeClassName="active" onClick={closeMobileMenu}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 d-flex justify-content-end align-items-center p-0">
              <Button className="custom-btn" title="Get a Quote" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
