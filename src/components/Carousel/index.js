import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "../Slide";

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
            Prev
          </button>
          <button className={styles.button} ref={nextRef}>
            Next
          </button>
        </div>
      </div>
      {slides.map((slide, _) => {
        return (
          <SwiperSlide className={styles.slide} key={slide.id}>
            <Slide {...slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
