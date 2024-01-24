"use client";
import React from "react";
import { iranian } from "../../data";
import Image from "next/image";
import "./foodsection.scss";

const Foodsection = () => {
  return (
    <div className="foodsection">
      <div className="title">
        <h2>غذای ایرانی (تخفیف ویژه)</h2>
        <p>
          بهترین و پرطرفدارترین غذاهای ایرانی و البته خوش قیمت ترین ها بر اساس
          رای مشتریان
        </p>
      </div>
      <div className="foodsection-container">
        {iranian.map((item) => (
          <div key={item.id} className="iranian-food">
            <div className="image-container">
              <Image
                src={item.img}
                width={200}
                alt="photo"
                className="iranian-image"
              />
              <div className="priceDetails">
                <h4>50% OFF</h4>
                <p>دسته بندی: غذای ایرانی</p>
                <span>{item.price} تومان </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodsection;
