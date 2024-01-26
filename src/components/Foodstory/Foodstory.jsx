"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { foodstory } from "@/data";
import "./foodstory.scss";
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
          spaceBetween={18}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1256: {
              slidesPerView: 4,
              spaceBetween: 18,
            },

            // 1860: {
            //   slidesPerView: 4,
            //   spaceBetween: 18,
            // },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {foodstory.map((story) => (
            <SwiperSlide key={story.id} className="slide">
              <div className="profile">
                <Image
                  src={story.profile}
                  alt={story.title}
                  className="profile-image"
                />
                <span className={story.live === true ? "live" : "lifeOff"}>
                  LIVE
                </span>
              </div>
              <div className="imgContainer">
                <Image
                  src={story.img}
                  alt={story.title}
                  className="slide-image"
                />
              </div>
              <div className="slide-content">
                <h3 className="slide-title">{story.title}</h3>
                <p className="slide-desc">{story.description}</p>
                <div className="slide-details">
                  <p className="restaurant">{story.restaurant}</p>
                  <p className="price">{story.price} تومان</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Foodstory;
