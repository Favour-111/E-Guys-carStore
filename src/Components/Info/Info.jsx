import React from "react";
import "./Info.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
const Info = () => {
  return (
    <div>
      <div className="info-container">
        <div className="slash"></div>
        <div className="info">
          <div className="blob1"></div>
          <div className="blob2"></div>
          <div className="info-itm">
            <div className="icn">
              <FaPlaneDeparture />
            </div>
            <div>
              <div className="info-head">Fast Shipping</div>
              <div className="info-text">
                provide fast home delivery for all product over $1000
              </div>
            </div>
          </div>
          <div className="info-itm">
            <div className="icn">
              <RiCustomerService2Line />
            </div>
            <div>
              <div className="info-head">online support</div>
              <div className="info-text">
                to support our customer we try to give support online
              </div>
            </div>
          </div>
          <div className="info-itm">
            <div className="icn">
              <MdOutlineSecurity />
            </div>
            <div>
              <div className="info-head">secure payment</div>
              <div className="info-text">
                we ensure our product good quality all time
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
