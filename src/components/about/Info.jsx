import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FiBriefcase } from 'react-icons/fi';
import { RiAwardFill } from 'react-icons/ri';

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
            <RiAwardFill className='about__icon' size={30} />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Working</span>
        </div>

        <div className="about__box">
            <FiBriefcase className='about__icon' size={25} />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48+ Projects</span>
        </div>

        <div className="about__box">
            <BiSupport className='about__icon' size={25} />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info