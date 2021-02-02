import React, { useRef } from "react";
import { string, arrayOf, shape } from "prop-types";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "../Slide";

import Prev from "../../assets/icons/portfolio/arrow-left.svg";
import Next from "../../assets/icons/portfolio/arrow-right.svg";
import "swiper/swiper.scss";
import styles from "./Carousel.module.scss";

SwiperCore.use([Navigation, Pagination]);

const Carousel = ({ slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={40}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{
        el: paginationRef.current,
        clickable: true,
        type: "fraction",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 1.6,
        },
        768: {
          slidesPerView: 2.4,
        },
        1920: {
          slidesPerView: 3,
        },
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.params.pagination.el = paginationRef.current;
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.count} ref={paginationRef} />
        </div>
        <div className={styles.inner}>
          <button className={styles.button} ref={prevRef}>
            <img className={styles.icon} src={Prev} alt="Prev" />
          </button>
          <button className={styles.button} ref={nextRef}>
            <img className={styles.icon} src={Next} alt="Next" />
          </button>
        </div>
      </div>
      {slides.map((slide, index) => {
        return (
          <SwiperSlide className={styles.slide} key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

Carousel.propTypes = {
  slides: arrayOf(
    shape({
      title: string,
      date: string,
      description: string,
      fullDescription: string,
      technologies: arrayOf(string),
      image: string,
      link: shape({
        text: string,
        path: string,
      }),
    })
  ).isRequired,
};

export default Carousel;
