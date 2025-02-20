import React from "react";
import "./FixedBackground.css";
import audi from "../../assets/images/purepng.com-audi-sports-caraudicarvehicletransportsports-car-9615246398733aria.png";

const FixedBackground = () => {
  return (
    <div className="background-container">
      <div className="content">
        <div className="cont">
          <div className="content-bd">
            <h1>
              <span className="line1">Get up to 10% off on car</span>
              <br />
              <span className="line2">spare parts Limited-time</span>
              <br />
              <span className="line3">offer!</span>
            </h1>
          </div>
        </div>

        <div className="car-img">
          <img src={audi} alt="" />
        </div>
        <div className="fixed-bg">
          <p>30% off all items for first sales</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default FixedBackground;
