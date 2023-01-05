
import React, { useState } from "react";

import { AiFillMessage, AiOutlineAppstore, AiOutlineClose, AiOutlineSortAscending, AiOutlineUserAdd } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

import "./header.css";

const Header = () => {
  /* ========= Change background header ========= */
  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    // when the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
})


      /* ========= Toggle Menu ========= */
    const[Toggle, showMenu] = useState(false);


  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">Suzan<span className="logo_text">Chandra</span></a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <MdRealEstateAgent className="nav__icon" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUserAdd className="nav__icon" /> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FaFileAlt className="nav__icon" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BsFillBriefcaseFill className="nav__icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <AiOutlineSortAscending className="nav__icon" /> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <AiFillMessage className="nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <AiOutlineClose className="nav__close" onClick={() => showMenu(!Toggle)}/>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  )
}

export default Header