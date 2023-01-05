import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook } from 'react-icons/ai';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Suzan Chandra</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank "
        >
            <AiOutlineFacebook />
        </a>

      <a
        href="https://www.instagram.com/"
        className="footer__social-link"
        target="_blank "
      >
        <AiFillInstagram />
      </a>

      <a
        href="https://twitter.com/"
        className="footer__social-link"
        target="_blank "
      >
        <AiFillTwitterCircle />
      </a>
            </div>

            <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer