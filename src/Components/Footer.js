import React, { Component } from "react";

import "./Footer.scss";

import logo from "./../assets/images/logo.svg";
import fb from "./../assets/images/fb.svg";
import linkedin from "./../assets/images/linkedin.svg";
import twitter from "./../assets/images/twitter.svg";
class Footer extends Component {
  render() {
    return (
      <div className="footer-container p-6 pl-4 sm-hide">
        <span className="footer-item">
          &copy;&nbsp;
          <img src={logo} alt="logo" height="30px" width="30px" />
          &nbsp;Foodie
        </span>
        <span className="footer-item sm-hide">
          Our services are available in every Indian metro cities
        </span>
        <span className="footer-icons text-right-align pl-4 sm-hide">
          <span className="mr-6">
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/nareshmaloth.cbit"
              target="_blank"
            >
              <img src={fb} alt="fb" height="30px" width="30px" />
            </a>
          </span>
          <span className="mr-6">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/malothnaresh"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" height="30px" width="30px" />
            </a>
          </span>
          <span className="mr-8">
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/Maloth46"
              target="_blank"
            >
              <img src={twitter} alt="twitter" height="30px" width="30px" />
            </a>
          </span>
        </span>
      </div>
    );
  }
}

export default Footer;
