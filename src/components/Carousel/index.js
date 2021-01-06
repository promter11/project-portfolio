import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import styles from "./Carousel.module.scss";

const Carousel = ({ slides }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <div className={styles.count}>1/2</div>
        <div className={styles.buttons}>
          <button className={styles.button} type="button">
            Prev
          </button>
          <button className={styles.button} type="button">
            Next
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={40}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1.6,
          },
          992: {
            slidesPerView: 2.4,
          },
          1920: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={(e) => console.log(e)}
      >
        {slides.map(({ id, title }, _) => {
          return (
            <SwiperSlide key={id}>
              <div className={styles.slide}>
                <div className={styles.slideBottom}>{title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
