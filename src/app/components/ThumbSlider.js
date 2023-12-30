"use client";

import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ThumbSlider(images) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {images && Array.isArray(images.images.data) && (
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 select-none"
        >
          {images.images.data.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_URL + image.attributes.url
                }`}
                width={image.attributes.width}
                height={image.attributes.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {images && Array.isArray(images.images.data) && (
        <div className="mt-5 relative">
          <div className="swiper-nav flex gap-4 items-center justify-end ml-auto w-28 ">
            <div className="swiper-button-prev relative flex items-center justify-center cursor-pointer xl:!-left-9 select-none max-xl:max-w-[13px]">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM20 7L1 7V9L20 9V7Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
            <div className="swiper-button-next relative flex items-center justify-center cursor-pointer xl:!-right-9 select-none max-xl:max-w-[13px]">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7071 8.70711C20.0976 8.31659 20.0976 7.68342 19.7071 7.2929L13.3431 0.928935C12.9526 0.53841 12.3195 0.53841 11.9289 0.928934C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-1.74846e-07 9L19 9L19 7L1.74846e-07 7L-1.74846e-07 9Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={4}
            freeMode={false}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            className="mySwiper select-none "
          >
            {images.images.data.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_URL + image.attributes.url
                  }`}
                  width={image.attributes.width}
                  height={image.attributes.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
