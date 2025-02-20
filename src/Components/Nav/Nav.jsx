import React from "react";
import "./Nav.css";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <div>
          <img
            className="logo"
            src="https://eguysperformance.com/cdn/shop/files/full_graphic_png_250x.png?v=1739988863"
            alt=""
          />
        </div>
        <div className="navigation-list-items">
          <ul>
            <li>Home</li>
            <li>
              collections <IoIosArrowDown />
            </li>
            <li>
              Pages <IoIosArrowDown />
            </li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-right-content">
          <div>
            <img
              width={40}
              height={40}
              src="https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png"
              alt="circled-user-male-skin-type-3--v1"
            />
          </div>
          <div>
            <BsSearch size={20} />
          </div>
          <div className="bar-cont">
            <GoHeart size={20} />
            <div className="bar-counter">2</div>
          </div>
          <div className="bar-cont">
            <RiShoppingCartLine size={20} />
            <div className="bar-counter">6</div>
          </div>
        </div>
      </div>
      <div className="nav-sm-cont">
        <div className="hamburger">
          <RxHamburgerMenu />
        </div>
        <div className="logo-cont">
          <img
            className="logo-sm"
            src="https://eguysperformance.com/cdn/shop/files/full_graphic_png_250x.png?v=1739988863"
            alt=""
          />
        </div>
        <div className="nav-right-content">
          <div>
            <img
              width={40}
              height={40}
              src="https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png"
              alt="circled-user-male-skin-type-3--v1"
            />
          </div>
          <div>
            <BsSearch size={20} />
          </div>
          <div className="bar-cont">
            <GoHeart size={20} />
            <div className="bar-counter">2</div>
          </div>
          <div className="bar-cont">
            <RiShoppingCartLine size={20} />
            <div className="bar-counter">6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
