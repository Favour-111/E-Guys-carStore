import React from "react";
import "./RecentCar.css";
import Item from "../Item/Item";
import product from "../product2"; // Ensure this is an array
import category from "../category"; // Ensure this is an array
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const RecentCar = () => {
  console.log("Product Data:", product);
  console.log("Category Data:", category);

  return (
    <div>
      {category.map((catItem) => {
        // Find all products matching this category
        const productFind = product.filter(
          (prodItem) => prodItem.category === catItem.name
        );

        console.log(`Products for category: ${catItem.name}`, productFind);

        return (
          <div className="NewProduct" key={catItem.name}>
            <div className="header mt-5">
              <div className="dash"></div>
              <div>{catItem.name}</div>
            </div>
            <div className="item2">
              <div>
                <img className="img" src={catItem.image} alt={catItem.name} />
              </div>
              <div className="item-body">
                {productFind.length > 0 ? (
                  productFind.map((prodItem) => (
                    <div
                      className="single-itm"
                      key={prodItem.id || prodItem.productName}
                    >
                      <Item product={prodItem} />
                    </div>
                  ))
                ) : (
                  <p>No products found for this category</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCar;
