import React from "react";
import "./NewProduct.css";
import Item from "../Item/Item";
import product from "../product";
const NewProduct = () => {
  return (
    <div className="NewProduct">
      <div className="header">
        <div className="dash"></div>
        <div>special offer</div>
      </div>
      <div className="item">
        <div className="item-body ">
          {product.map((item) => {
            return (
              <div className="single-itm">
                <Item product={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
