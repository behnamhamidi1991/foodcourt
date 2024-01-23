import React from "react";
import { food } from "@/data";
import Image from "next/image";

const Foodsection = () => {
  return (
    <div className="foodsection">
      <div className="title">
        <h2></h2>
        <p></p>
      </div>
      <div className="foodsection-container">
        {food.map((item) => {
          <div className="foodsection-box" key={item.id}>
            <Image src={item.img} width={100} alt={item.title} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Foodsection;
