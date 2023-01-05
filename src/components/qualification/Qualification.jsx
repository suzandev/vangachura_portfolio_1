import React, { useState } from 'react';
import { BsFillBriefcaseFill, BsFillCalendarDayFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import "./qualification.css";



const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <FaGraduationCap className='qualification__icon'/> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}
                onClick={() => toggleTab(2)}
                >

                    <BsFillBriefcaseFill className='qualification__icon'/> Experience
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">

                        <div>
                            <h3 className="qualification__title">
                                Web Design
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2021 - Present
                            </div>
                         </div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        
                        <div>
                            <h3 className="qualification__title">
                                Art Director
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2019 - 2022

                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Web Development
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2019 - 2021

                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">
                                UX Expert
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2019 - 2021

                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Product Designer
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2021 - Present

                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                       

                        <div>
                            <h3 className="qualification__title">
                                UX Designer
                            </h3>
                            <span className="qualification__subtitle">Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2019 - 2022

                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Web Designer
                            </h3>
                            <span className="qualification__subtitle">Figma - Ks Devware</span>
                            <div className="qualification__calender">
                                <BsFillCalendarDayFill /> 2019 - 2021

                            </div>
                        </div>

                    
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification