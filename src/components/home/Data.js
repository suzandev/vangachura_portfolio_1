import React from "react";
import { FiSend } from "react-icons/fi";
import { IoMdHand } from "react-icons/io";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Suzan Chandra
        <IoMdHand className="home__hand" />
      </h1>

      <h3 className="home__subtitle">Visual Designer</h3>
      <p className="home__description">
        I'm creative designer based in Bangladesh, and I'm very passionate and
        dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <FiSend />
      </a>
    </div>
  );
};

export default Data;
