import React from 'react';

import tangoFB from '../images/tango-facebook-icon.svg';
import tangoIG from '../images/tango-instagram-icon.svg';
import tangoLI from '../images/tango-linkedin-icon.svg';

import { FooterWrapper } from './styles/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Kontakta oss</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>ANDERS LINDÉN</h3>
          <p className="tango-contact">
            <a href="mailto:anders@tangobrandalliance.se">
              anders@tangobrandalliance.se
            </a>
          </p>
          <p className="tango-contact">+46 (0) 706 531 992</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anders-lindén-06893316/"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>MIRELLE ANDREASSON</h3>
          <p className="tango-contact">
            <a href="mailto:mirelle@tangobrandalliance.se">
              mirelle@tangobrandalliance.se
            </a>
          </p>
          <p className="tango-contact">+46 (0) 708 328 845</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mirelle-andreasson-15ab9b115/"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>TANGO BRAND ALLIANCE AB</h3>
          <p className="tango-contact">Box 160, 101 23 Stockholm</p>
          <p className="tango-contact">Besök: Convendum, Vasagatan 16</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/tangobrandalliance/"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tangobrandalliance/"
            >
              <img className="linkedin" src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
