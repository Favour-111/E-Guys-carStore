import React from "react";
import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="line"></div>
      <div className="footer">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            {" "}
            <img
              className="logo"
              src="https://eguysperformance.com/cdn/shop/files/full_graphic_png_250x.png?v=1739988863"
              alt=""
            />
            <div className="footer-content">
              Welcome to our store, where we pride our selves on providing
              exceptional products and unparalled customer service. our store is
              a haven for those.
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-head">Need Help</div>
            <ul className="footer-list">
              <li>Contact</li>
              <li>About Us</li>
              <li>Size Chart</li>
              <li>Shipping and refunding</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-head">Quick Link</div>
            <ul className="footer-list">
              <li>privacy policy</li>
              <li>refund policy</li>
              <li>Shipping policy</li>
              <li>Terms of service</li>
              <li>Terms and condition</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footer-head">contact us</div>
            <ul className="footer-list">
              <li>
                <span>
                  <MdLocationOn size={20} />
                </span>{" "}
                EGUYS - AutoParts Store 507-Union Trade Ipsum Doler Centre
                France
              </li>
              <li>
                <span>
                  <IoIosMail size={20} className="me-2" />
                </span>
                Eguys@gmail.com
              </li>
              <li>
                <span>
                  <FaPhone size={20} className="me-2" />
                </span>{" "}
                +81 308 307
              </li>
            </ul>
          </div>
        </div>
        <div className="copywrite">
          Copyright © all rights reserved. Powered by horbah's tech
        </div>
      </div>
    </div>
  );
};

export default Footer;
