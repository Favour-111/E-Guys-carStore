import React from "react";
import "./CarFilter.css";
import { FaAngleDown } from "react-icons/fa";
const CarFilter = () => {
  return (
    <div className="special-container">
      {/* <div className="header mt-5 mb-5">
        <div className="dash"></div>
        <div>Select car part</div>
      </div> */}
      <div className="filter-spec">
        <div className="spec-cont">
          <div className="steps">
            <span>01</span> select car year
          </div>
          <button>
            <div>all year</div>
            <div>
              <FaAngleDown />
            </div>
          </button>
        </div>
        <div className="spec-cont">
          <div className="steps">
            <span>02</span> select car model
          </div>
          <button>
            <div>all model</div>
            <div>
              <FaAngleDown />
            </div>
          </button>
        </div>
        <div className="spec-cont">
          <div className="steps">
            <span>03</span> select car make
          </div>
          <button>
            <div>all make</div>
            <div>
              <FaAngleDown />
            </div>
          </button>
        </div>

        <div className="spec-cont">
          <button className="search">quick Search</button>
        </div>
      </div>
      {/* <div className="deals-item-cont">
        <div className="deals-item shadow-sm">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/857/288/non_2x/generated-ai-car-seat-on-transparent-background-free-png.png"
              alt=""
            />
          </div>
          <div>
            <div className="price-spec mt-3">From $96</div>
            <div className="spec-desc">
              Latest <br /> car interior
            </div>
            <button>shop now</button>
          </div>
        </div>
        <div className="deals-item shadow-sm">
          <div>
            <img
              src="https://pngimg.com/d/steering_wheel_PNG16686.png"
              alt=""
            />
          </div>
          <div>
            <div className="price-spec mt-3">From $96</div>
            <div className="spec-desc">
              Latest <br /> car wheel
            </div>
            <button>shop now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CarFilter;
