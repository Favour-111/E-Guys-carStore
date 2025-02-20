import React, { useState } from "react";
import "./Item.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoHeart } from "react-icons/go";

const Item = ({ product }) => {
  return (
    <div>
      <div className="item-body2">
        <div className="item-image">
          <img src={product.image} alt="" />
        </div>
        <div className="item-desc">
          <div className="item-name">
            {" "}
            {product.productName.length < 40
              ? product.productName
              : product.productName.slice(0, 30) + "..."}
          </div>
          <div className="d-flex align-items-center gap-2 mt-3">
            <div className="old-price">${product.oldPrice}</div>
            <div className="new-price">${product.NewPrice}</div>
          </div>
          <button className="AddCart">Add to cart</button>
        </div>
        <div className="discount">12%</div>
      </div>
    </div>
  );
};

export default Item;
