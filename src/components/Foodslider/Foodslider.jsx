"use client";
import "./foodslider.scss";
import React, { useRef, useState } from "react";
import { food } from "@/data";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Foodslider = () => {
  return (
    <div className="foodslider-container">
      <div className="foodslider-title">
        <h2 className="section-title">محبوب ترین آیتم ها</h2>
        <p className="section-description">
          پرطرفدارترین سفارشات ما بر اساس انتخاب مشتریان
        </p>
      </div>
      <div className="foodslider-slidebox">
        <Swiper
          spaceBetween={15}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            940: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {food.map((item) => (
            <SwiperSlide key={item.id} className="foodslider-slide">
              <div className="foodslider-image-container">
                <Image
                  src={item.img}
                  width={400}
                  height={100}
                  alt={item.title}
                  className="foodslider-image"
                />
              </div>
              <div className="foodslider-content-container">
                <div className="foodslider-content-title">
                  <h3 className="fastfood-title">{item.title}</h3>
                  <p className="fastfood-description">{item.description}</p>
                </div>
                <div className="tag-container">
                  <h3 className="foodsslider-title">{item.category}</h3>
                  <p className="foodsslider-price">{item.price} تومان</p>
                  <p className="foodsslider-restaurant">
                    {" "}
                    رستوران: {item.restaurant}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Foodslider;
