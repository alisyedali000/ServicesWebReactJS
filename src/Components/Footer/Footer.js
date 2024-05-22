import React from 'react';
import './Footer.css'; // Import the CSS file

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__services">
          <h3 className="footer__services-heading">Services</h3>
          <ul className="footer__services-list">
            <li className="footer__services-item">Air Condition</li>
            <li className="footer__services-item">Electrical</li>
            <li className="footer__services-item">Plumbing</li>
            <li className="footer__services-item">Civil</li>
            <li className="footer__services-item">Maintenance Service</li>
            <li className="footer__services-item">Pest Control</li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3 className="footer__contact-heading">Contact</h3>
          <p className="footer__contact-info">
            <span className="footer__contact-phone">+971(4)8923308</span>
            <br />
            <span className="footer__contact-phone">+971 50.367 7070</span>
          </p>
          <p className="footer__contact-email">info@888Services.de</p>
          <p className="footer__contact-address">
            The Curve Building, Sheik Zayed <br /> Dubai, UAE
          </p>
        </div>
        <div className="footer__download">
          <h3 className="footer__download-heading">Download our App</h3>
          <div className="footer__download-stores">
            <a
              href="#"
              className="footer__download-store"
            >
              <img
                src="https://placehold.it/34x34" // Replace with App Store logo
                alt="App Store"
                className="footer__download-store-icon"
              />
            </a>
            <a href="#" className="footer__download-store">
              <img
                src="https://placehold.it/34x34" // Replace with Play Store logo
                alt="Play Store"
                className="footer__download-store-icon"
              />
            </a>
          </div>
          <p className="footer__download-text">Follow us</p>
          <a href="#" className="footer__download-icon">
            <i className="fab fa-facebook-f"></i> {/* Replace with FontAwesome icon */}
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">
          © 888Services. All Rights Reserved. 2024
        </p>
      </div>
    </footer>
  );
};

export default footer;
