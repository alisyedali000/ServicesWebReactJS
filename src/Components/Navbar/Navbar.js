import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button/Button';
import './Navbar.css';
import Logo from './Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  window.addEventListener('resize', showButton);

  return (
    <>
    <div className="topBar">
    <FontAwesomeIcon icon="fas fa-shipping-fast" />
      <p className='top-bar-p'>24x7 Emergency Response</p>
      <p className='topbar-phone'>04-892 3308</p>
    </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} className="navbar-logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="nav-links-mobile" onClick={closeMobileMenu}>
                Get a Quote
              </Link>
            </li>
          </ul>
          {/* {button && <Button onClick={() => console.log("Ok")} buttonStyle='btn--outline'>Book Now</Button>} */}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
