import React, { useRef, useState } from "react";
import "./Blog.css";
import { LuClock } from "react-icons/lu";
import blog from "../blog";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <div className="NewProduct">
      <div className="blog-container">
        {blog.slice(0, 3).map((item) => {
          return (
            <div className="blog-item">
              <div className="blog-img">
                <img src={item.image} alt="" />
              </div>

              <div className="blog-time">
                <LuClock />
                {item.date}
              </div>
              <div className="blog-header">{item.title}</div>
              <div className="blog-content">
                <p>{item.content}</p>
              </div>
              <div className="readmore">
                read more{" "}
                <span>
                  <MdKeyboardDoubleArrowRight
                    size={15}
                    className="text-danger"
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
