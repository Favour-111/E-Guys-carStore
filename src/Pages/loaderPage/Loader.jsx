import React, { useEffect } from "react";
import "./Loader.css";
import loader from "../../assets/images/icons8-tire-94.png";
import { useNavigate } from "react-router-dom";
const Loader = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Home");
    }, 4000);
  });
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
