import React from "react";
import "./homesection.scss";
import Categories from "../Categories/Categories";

const Homesection = () => {
  return (
    <div className="homepage">
      <div className="home-content-box">
        <h1 className="home-title">کافی شاپ و فود کورت سورنا</h1>
        <p className="home-description">
          سفارش آنلاین انواع غذا و نوشیدنی با قیمت های متنوع و شگفت انگیز
        </p>
        <p className="home-description2">دارای شعبه در سرتاسر ایران</p>
      </div>
      <div className="home-btn-container">
        <button className="home-btn btn1">ثبت نام کنید</button>
        <button className="home-btn btn2">ورود به سایت</button>
      </div>
      <Categories />
    </div>
  );
};

export default Homesection;
