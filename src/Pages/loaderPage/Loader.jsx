import React from "react";
import "./Loader.css";
import loader from "../../assets/images/icons8-tire-94.png";
const Loader = () => {
  return (
    <div>
      <div className="loader-bg">
        <span class="loader"></span>
      </div>
      <div className="text-head-body">
        <div className="text-head">Eguys</div>
      </div>
    </div>
  );
};

export default Loader;
