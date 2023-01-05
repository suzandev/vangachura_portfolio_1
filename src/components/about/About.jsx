import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import AboutImg from "../../assets/Profile.jpg";
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img'/>

            <div className="about__data">
                <Info />

                <p className="about__discription">
                    Frontend developer, I create web pages with UI / UX user interface, I have three years of experience and many clients are happy with the projects carried out.
                </p>

                <a download="" href="/" className="button button--flex">Download CV <FaFileDownload /></a>
            </div>
        </div>
    </section>
  )
}

export default About





//  =======    1.14 : 00 =======