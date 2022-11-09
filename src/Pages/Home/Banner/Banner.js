import React from "react";
import img1 from "../../../assets/banner/homebanner.jpg";

const Banner = () => {
  return (
    <div>
      <h1 className="lg:text-6xl font-bold mb-10 text-teal-800">
        Sports Photoghapher
      </h1>
      <img className="w-[90vw] h-[70vh] mx-auto rounded-xl" src={img1} alt="" />
    </div>
  );
};

export default Banner;
