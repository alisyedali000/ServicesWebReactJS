import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from '../../images/main-logo.png'
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [status, setStatus] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <div className="topBar">
        <FontAwesomeIcon icon="fas fa-shipping-fast" />
        <p className="top-bar-p">24x7 Emergency Response</p>
        <p className="topbar-phone">04-892 3308</p>
      </div> */}
      <nav className="navbar">
        <div className="container">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} className="navbar-logo" />
          </Link> */}
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}

          <div className="logo-portion">
            <img src={Logo} alt="logo-img" className="logo-img" />

          </div>
          <ul className="">
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
                <MdOutlineKeyboardArrowDown />

              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-links" onClick={closeMobileMenu}>
                Services
                <MdOutlineKeyboardArrowDown />

              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Button className="custom-btn" title="Get a Qoute" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
