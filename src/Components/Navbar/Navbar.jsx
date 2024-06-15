import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../button/button";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Logo from "../../images/main-logo.svg";
import NavbarCar from "../../images/navbar-car.svg";

import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { content } from "../../Pages/Services/data";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showCross, setshowCross] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownServices, setdropdownServices] = useState(false);
  const [hoveredOption, setHoveredOption] = useState();
  const [hoveredImg, setHoveredImg] = useState();
  const [hoveredImgSub, setHoveredImgSub] = useState();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setdropdownServices(false);
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
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

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

  useEffect(() => {
    const data = content?.find(
      (e) => e.imgTitle === (hoveredOption ?? "Air Conditioning")
    );
    if (data) {
      setHoveredImg(data.mainImg);
      setHoveredImgSub(data.ImgSubtitle);
    }
  }, [hoveredOption]);

  window.addEventListener("resize", showButton);

  const generateLink = (title) => {
    return title?.toLowerCase().replace(/\s+/g, "-");
  };

  const itemsData = [
    { title: "Air Conditioning" },
    { title: "Electrical" },
    { title: "Plumbing" },
    { title: "Handyman" },
    { title: "Water Tank" },
    { title: "Pest Control" },
    { title: "Appliances" },
    { title: "Painting" },
    { title: "LandScaping" },
    { title: "Civil Works" },
    { title: "Facade Cleaning" },
    { title: "Elevators" },
  ];

  const isService = itemsData.find(
    ({ title }) =>
      `/services/${generateLink(title)}` == window.location.pathname
  );

  const dropdownItems = ["888 Services", "Mission & Vision", "Core Values"];
  const isAbout = window.location.pathname.includes("about");
  return (
    <nav className="">
      <div
        className={`container-fluid navbar ${showMenu ? "view-height" : ""}`}
        style={{ "--bs-navbar-padding-y": "0", zIndex: 2 }}
      >
        <div className="row navbar-row mobile-navbar">
          <div
            className="col-12 col-md-3 col-lg-3"
            onClick={() => {
              navigate("/");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <div className="logo-portion">
              <img src={Logo} alt="logo-img" className="logo-img" />
              {isMobile && (
                <div onClick={handleCategories}>
                  {showCross ? (
                    <RxCross2 color="#fff" />
                  ) : (
                    <MdMenu fill="#ffffff" />
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            className={`col-12 col-lg-7 list-container ${
              showMenu ? "" : "d-none"
            }`}
          >
            <ul className="main-list px-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-links"
                  activeClassName="active"
                  onClick={() => {
                    closeMobileMenu();
                    handleMobileNavClose();
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <a
                  style={{ cursor: "pointer" }}
                  className={isAbout ? "nav-links active" : "nav-links"}
                  onClick={toggleDropdown}
                >
                  About us
                  <MdOutlineKeyboardArrowDown fill="#ef960b" size={19} />
                </a>
                {dropdownVisible && (
                  <ul
                    className="d-flex flex-column dropdown-list-mobile"
                    style={{ zIndex: 1, width: "100%" }}
                  >
                    {dropdownItems.map((item, index) => (
                      <li
                        key={index}
                        style={{ cursor: "pointer", position: "relative" }} // Added position relative
                        className="dropdown-item-mobile"
                      >
                        <a
                          href={`/about/${item}`}
                          onClick={() => {
                            closeMobileMenu();
                            handleMobileNavClose();
                            toggleDropdown();
                          }}
                          style={{
                            textDecoration: "none",
                            display: "block",
                            color: "inherit",
                          }}
                        >
                          {index === 0 && (
                            <div className="arrow-up-about-us-mobile"></div>
                          )}
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isService?.title ? "nav-links active" : "nav-links"
                  }
                  onClick={toggleServiceDropdown}
                >
                  Services
                  <MdOutlineKeyboardArrowDown fill="#ef960b" size={19} />
                </Link>
                {dropdownServices && (
                  <ul
                    className="custom-grid-services dropdown-list-services-mobile"
                    style={{ zIndex: 1, width: "94%" }}
                  >
                    {itemsData.map((item, index) => (
                      <li
                        key={item.title}
                        className="dropdown-item-services-mobile"
                      >
                        <a
                          href={`/services/${generateLink(item.title)}`}
                          onClick={() => {
                            closeMobileMenu();
                            handleMobileNavClose();
                          }}
                          onBlur={toggleServiceDropdown}
                          style={{
                            textDecoration: "none",
                            display: "block",
                            color: "inherit",
                          }}
                        >
                          {" "}
                          {index === 0 && (
                            <div className="arrow-up-services-mobile"></div>
                          )}
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-links"
                  activeClassName="active"
                  onClick={() => {
                    closeMobileMenu();
                    handleMobileNavClose();
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`col-12 col-lg-2 ${
              showMenu ? "d-flex" : "d-none"
            } justify-content-center align-items-center`}
            onClick={() => {
              navigate("/quote");
              closeMobileMenu();
              handleMobileNavClose();
            }}
            style={{
              marginTop: 20,
            }}
          >
            <Button className="custom-btn" title="Get a Quote" />
          </div>
        </div>
      </div>

      <div
        className="navbar desktop-view"
        style={{ "--bs-navbar-padding-y": "0", zIndex: 2 }}
      >
        <div className="bg-white w-100 d-sm-block d-none">
          <div className="container py-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-start">
                <img src={NavbarCar} alt="logo-img" />
                <p className="mb-0 ps-2 poppin" style={{ fontSize: "14px" }}>
                  24x7 Emergency Response
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <p
                  className="m-0 poppin"
                  style={{ fontSize: "14px", paddingRight: "3.19rem" }}
                >
                  04-892 3308
                </p>
                <div
                  style={{
                    display: "flex",
                    columnGap: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <Link to={"https://www.facebook.com/888services.ae"}>
                    {" "}
                    <img
                      src={window.location.origin + "/images/Navbar/f.png"}
                      style={{ width: "17px" }}
                    />
                  </Link>
                  <Link to={"https://www.instagram.com/888services.ae/"}>
                    <img
                      src={window.location.origin + "/images/Navbar/i.png"}
                      style={{ width: "17px" }}
                    />
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/company/888-services-llc"}
                  >
                    <img
                      src={window.location.origin + "/images/Navbar/l.png"}
                      style={{ width: "17px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container custom-padding-desktop`}>
          <div
            className="row navbar-row desktop-navbar"
            style={{ "--bs-gutter-x": "0" }}
          >
            <div
              className="col-12 col-md-3 col-lg-3"
              onClick={() => {
                navigate("/");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <div>
                <img src={Logo} alt="logo-img" style={{ marginLeft: -30 }} />
              </div>
            </div>
            <div className="col-12 col-lg-7 list-container d-flex justify-content-end align-items-center">
              <ul className="main-list px-0" style={{ columnGap: "3rem" }}>
                <li
                  className="nav-item"
                  onClick={() => {
                    setDropdownVisible(false);
                    setdropdownServices(false);
                  }}
                >
                  <NavLink
                    exact
                    to="/"
                    className="nav-links"
                    activeClassName="active"
                    onClick={() => {
                      closeMobileMenu();
                      handleMobileNavClose();
                      // toggleDropdown()
                      // toggleServiceDropdown()
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={isAbout ? "nav-links active" : "nav-links"}
                    onMouseOver={toggleDropdown}
                  >
                    About us
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />
                  </a>
                  {dropdownVisible && (
                    <>
                      <div
                        className="d-flex dropdown-list about-us-dropdown custom-height-about-us"
                        onMouseLeave={() => {
                          setDropdownVisible(false);
                        }}
                      >
                        {/* <div className="img-holder">
                         <img src={hoveredImg} />
                         <p className="custom-p">{hoveredOption ?? "Air Conditioning"}</p>
                       </div> */}
                        <ul className="custom-about-us-ul ">
                          {dropdownItems.map((item, index) => (
                            <li
                              key={item}
                              className="dropdown-item custom-dropdown-item-about-us"
                              onMouseOver={() => {
                                setHoveredOption(item);
                              }}
                              // onMouseOut={() => {
                              //   setHoveredOption("");
                              // }}
                            >
                              <a
                                href={`/about/${item}`}
                                onClick={() => {
                                  toggleDropdown();
                                }}
                                style={{
                                  textDecoration: "none",
                                  display: "block",
                                  color: "inherit",
                                }}
                              >
                                {index === 0 && (
                                  <div className="arrow-up-about-us"></div>
                                )}
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>

                <li className="nav-item">
                  <Link
                    className={
                      isService?.title ? "nav-links active" : "nav-links"
                    }
                    onMouseOver={toggleServiceDropdown}
                  >
                    Services
                    <MdOutlineKeyboardArrowDown fill="#ef960b" />
                  </Link>
                  {dropdownServices && (
                    <div
                      className="d-flex dropdown-list service-dropdown custom-height"
                      onMouseLeave={() => {
                        setdropdownServices(false);
                      }}
                    >
                      <div className="img-holder">
                        <img
                          src={"https://888Services.ae/" + hoveredImg}
                          style={{
                            maxWidth: "90%",
                            height: "auto",
                          }}
                        />
                        <strong
                          className={
                            hoveredOption === "Air Conditioning" ||
                            hoveredOption === undefined
                              ? "hovered-margin"
                              : ""
                          }
                        >
                          {hoveredOption ?? "Air Conditioning"}
                        </strong>
                        <p style={{ color: "gray", fontSize: 13 }}>
                          {hoveredImgSub ?? "Keep your home cool"}
                        </p>
                      </div>
                      <ul style={{ zIndex: 1 }} className="custom-grid">
                        {itemsData.map((item, index) => (
                          <li
                            key={item.title}
                            className="dropdown-item custom-dropdown-item"
                            onMouseOver={() => {
                              setHoveredOption(item.title);
                            }}
                            // onMouseOut={() => {
                            //   setHoveredOption("");
                            // }}
                          >
                            <a
                              href={`/services/${generateLink(item.title)}`}
                              onClick={() => {
                                toggleServiceDropdown();
                              }}
                              onBlur={toggleServiceDropdown}
                              style={{
                                textDecoration: "none",
                                display: "block",
                                color: "inherit",
                              }}
                            >
                              {index === 0 && <div className="arrow-up"></div>}
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setDropdownVisible(false);
                    setdropdownServices(false);
                  }}
                >
                  <NavLink
                    to="/contact"
                    className="nav-links"
                    activeClassName="active"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className="col-12 col-lg-2 d-flex justify-content-end align-items-center p-0"
              onClick={() => {
                navigate("/quote");
                setDropdownVisible(false);
                setdropdownServices(false);
              }}
            >
              <Button className="custom-btn" title="Get a Quote" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
