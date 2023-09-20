import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import classes from "./Slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import {Autoplay} from "swiper";
import {Autoplay} from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Graphic Design
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Interior Design
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Asset Design
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Marketing
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Character Design
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Fashion
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Inspiration
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Graphic Design
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({isNext}) => (
          <div
            className={
              isNext
                ? `${classes.slider} ${classes.currentSlider}`
                : `${classes.slider}`
            }
          >
            Interior Design
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
