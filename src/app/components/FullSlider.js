"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FullSlider = (slides) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-[400px] lg:h-screen cursor-default"
      loop={1}
      speed={1200}
    >
      {slides &&
        slides.slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={
              {
                // backgroundImage: `url('${slide.image.url}')`,
              }
            }
            className="h-full w-full bg-cover bg-center"
          >
            <div className="flex flex-col items-center justify-center h-full w-full px-4">
              <div className="absolute w-full h-full top-0 left-0 z-0">
                <Image src={slide.image.url} fill className="" />
              </div>

              <h1 className="text-white uppercase text-xl font-extralight text-center lg:text-[55px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-7 lg:leading-[50px] py-3 z-10">
                {slide.title}
              </h1>
              <div className="text-white text-center mt-1 uppercase font-extralight text-lg lg:text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-5 z-10">
                {slide.subtitle}
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default FullSlider;
