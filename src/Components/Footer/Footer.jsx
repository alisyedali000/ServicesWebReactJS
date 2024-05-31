import React from 'react';
import './Footer.css';
import footerLogo from '../../images/footer-logo.png';
import storeLogo from '../../images/playstore.png';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className='footer-logo-portion'>
                <img src={footerLogo} alt="logo" className='footer-img' />
                <br/>
                <p className='text-gray pt-lg-4'>Premium Quality <br /> Maintenance Services</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className='footer--services align-items-md-start align-items-center '>
                <h1 className='logo-text footer-title fw-medium ps-2 '>Services</h1>
                <ul className="footer--services-list text-gray d-flex align-items-md-start align-items-center p-0">
                  <li className="footer-services-item">Air Condition</li>
                  <li className="footer-services-item">Electrical</li>
                  <li className="footer-services-item">Plumbing</li>
                  <li className="footer-services-item">Civil</li>
                  <li className="footer-services-item">Maintenance Service</li>
                  <li className="footer-services-item">Pest Control</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 pt-sm-0 pt-4">
              <div className='footer--contact align-items-md-start align-items-center text-md-start'>
                <h3 className='logo-text footer-title fw-medium ps-2'>Contact</h3>
                <ul className="footer--contact-list text-gray align-items-md-start align-items-center p-0">
                  <li className="footer-contact-item ">+971(4) 8923308</li>
                  <li className="footer-contact-item mt-0">+971 50 387 7070</li>
                  <br/>
                  <li className="footer-contact-item">info@888services.ae</li>
                  <br/>
                  <li className="footer-contact-item">The Curve Building, Sheik Zayed</li>
                  <li className="footer-contact-item">Dubai, UAE</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 off-span-lg-4 my-5">

            </div >
            <div className="col-sm-12 col-md-6 col-lg-4 off-span-lg-4 my-5 text-md-start text-center">
              <div className='footer--download text-md-start text-center '>
                <h3 className='logo-text mb-3'>
                  Download us on
                </h3>
                <img src={storeLogo} className='storelogo' alt="Play Store logo" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5 text-md-start text-center">
              <div className='footer--follow'>
                <h3 className='mb-3'>Follow us</h3>
                <div className='footer-icons text-md-start text-center'>
                  <FaFacebookF className='me-3' width='2em' height='2em' />
                  <FaInstagram className='mx-3' width={23} height={23} />
                  <FaLinkedinIn className='mx-3' width={23} height={23} />
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
