"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Hero() {
  const images = ["img/menu1.png", "img/menu1.png", "img/menu1.png", "img/menu1.png"];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className="hero">
      <Swiper onSlideChange={handleSlideChange} slidesPerView={1} spaceBetween={15} loop>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={image} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all w-2 h-2 rounded-full ${
                activeSlide === index ? "p-1 w-6 bg-[#FF5800]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
