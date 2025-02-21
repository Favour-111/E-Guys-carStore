import React, { useState } from "react";
import "./Nav.css";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import cancel from "../../assets/images/icons8-cancel-50.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleMouseEnter = () => setNavIsOpen(true);
  const handleMouseLeave = () => setNavIsOpen(false);

  const [navIsOpen, setNavIsOpen] = useState(false);
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
        <div
          className="hamburger"
          onClick={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
      {navIsOpen && <div className="background-overflow"></div>}
      <div
        className={`nav-sm-container ${navIsOpen ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="menu-head">
          <div className="text">Menu</div>
          <div onClick={() => setNavIsOpen(false)} aria-label="Close Menu">
            <img src={cancel} width={40} alt="" />
          </div>
        </div>
        <div>
          <ul className="Nav-link">
            <li>
              <Link className="Link">Home</Link>
            </li>
            <li>
              <div className="Sub-nav">
                <div className="Link">AutoParts</div>
                <div>
                  <IoIosArrowRoundForward size={20} />
                </div>
              </div>
            </li>
            <li>
              <Link className="Link">Collection</Link>
            </li>
            <li>
              <Link className="Link">About Us</Link>
            </li>
            <li>
              <Link className="Link">Contact</Link>
            </li>
            <li>
              <Link className="Link">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
