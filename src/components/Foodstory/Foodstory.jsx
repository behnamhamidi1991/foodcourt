"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { foodstory } from "@/data";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Foodstory = () => {
  return (
    <div className="foodstory-container">
      <div className="page-title">
        <h2>فود استوری</h2>
        <p>بهترین آفر های کیک، شیرینی، فست فود و نوشیدنی از نظر مشتریان ما</p>
      </div>

      <div className="slider-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {foodstory.map((story) => (
            <SwiperSlide key={story.id} className="slide">
              <div className="imgContainer">
                <Image src={story.img} width={100} alt={story.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Foodstory;
