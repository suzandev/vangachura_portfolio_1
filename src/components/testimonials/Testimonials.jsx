
import { Data } from "./Data";
import "./testimonials.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React components
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

const Testimonials = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">My Clients Say</h2>
        <span className="section__subtitle">Testimonial</span>

        <Swiper className="testimonial__container mySwiper"
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              autoPlay={true}
              grabCursor={true}
              lazy={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[ Pagination, Navigation]}
              
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className='testimonial__img' />

                        <h3 className="testimonial__name">{title}</h3>

                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>

  )
}

export default Testimonials