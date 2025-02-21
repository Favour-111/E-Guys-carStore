import React from "react";
import "./Category.css";
const Category = () => {
  const category = [
    {
      img: "https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-brake-lights-car-sedan-light-png-image_14625454.png",
      categoryName: "tail light",
    },
    {
      img: "https://pngimg.com/d/automotive_battery_PNG12085.png",
      categoryName: "car battery",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/047/246/997/non_2x/suspension-3d-illustration-png.png",
      categoryName: "suspension",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/825/081/small_2x/illustration-car-brakes-steering-wheel-realistic-3d-icon-png.png",
      categoryName: "car breaks",
    },
    {
      img: "https://png.pngtree.com/png-vector/20240827/ourmid/pngtree-car-tire-with-wheel-rim-3d-model-clipart-png-image_13628831.png",
      categoryName: "car tires",
    },
    {
      img: "https://wallpapers.com/images/hd/mercedes-benz-steering-wheel-png-06242024-mtnw78mtd9kfk5dj.jpg",
      categoryName: "car interiors",
    },
  ];
  return (
    <div>
      <div className="category-body">
        <div className="header mt-3">
          <div className="dash"></div>
          <div>Top category</div>
        </div>
        <div className="category-item-body">
          {category.map((item) => {
            return (
              <div className="category-itm">
                <div className="blob"></div>
                <div className="category-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="category-name">{item.categoryName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
