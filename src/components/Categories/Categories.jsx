"use client";
import React from "react";
import "./categories.scss";
import { icons } from "@/data";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-icons-container">
        <div className="categorybox">
          {icons.map((icon) => (
            <div key={icon.id} className="icon-box">
              <div className="box">
                <div className="icon">{icon.icon}</div>
                <div className="title">{icon.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
