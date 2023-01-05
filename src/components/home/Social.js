import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineDribbble,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank "
      >
        <AiFillInstagram />
      </a>

      <a
        href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank "
      >
        <AiOutlineDribbble />
      </a>

      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank "
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Social;
