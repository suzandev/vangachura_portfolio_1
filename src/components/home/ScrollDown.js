import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CgScrollV } from "react-icons/cg";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <CgScrollV className="home__scroll" />
        <span className="home__scroll-name">Scroll Down</span>
        <AiOutlineArrowDown className="home__scroll-arrow" />
      </a>
    </div>
  );
};

export default ScrollDown;
