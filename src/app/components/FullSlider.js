"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FullSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-screen cursor-default"
      loop={1}
      speed={1200}
    >
      <SwiperSlide
        style={{ backgroundImage: `url('/banner.jpg')` }}
        className="h-full w-full"
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-white uppercase font-extralight text-[55px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-7 leading-[50px] py-3">
            Cветильники и осветительные системы
          </h1>
          <div className="text-white mt-1 uppercase font-extralight text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-5">
            Индивидуальный подход к вашему стилю
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ backgroundImage: `url('/banner2.png')` }}
        className="h-full w-full"
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-white uppercase font-extralight text-[55px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-7 leading-[50px] py-3">
            Cветильники и осветительные системы
          </h1>
          <div className="text-white mt-1 uppercase font-extralight text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-5">
            Индивидуальный подход к вашему стилю
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FullSlider;
