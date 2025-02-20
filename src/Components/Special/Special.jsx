import React from "react";

const Special = () => {
  return (
    <div className="category-body">
      <div className="deals-item-cont">
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
      </div>
    </div>
  );
};

export default Special;
