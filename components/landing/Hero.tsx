import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className=" wrapper border-x -mt-24 pt-24 min-h-[60vh] relative  "
    >
      <svg
        className=" absolute z-40 -translate-y-[85%]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M28.7,-50.8C32.8,-47.2,28.8,-30.8,39.1,-20.2C49.3,-9.6,73.8,-4.8,82.8,5.2C91.8,15.1,85.2,30.3,73.9,39C62.5,47.8,46.4,50.1,33.3,58.7C20.2,67.3,10.1,82.1,-1.7,85.1C-13.5,88,-26.9,79,-41.3,71.1C-55.7,63.2,-71,56.5,-69.6,44.9C-68.2,33.2,-50.2,16.6,-46.6,2.1C-43.1,-12.5,-53.9,-24.9,-52.5,-31.8C-51.1,-38.7,-37.4,-39.9,-26.6,-39.6C-15.8,-39.3,-7.9,-37.4,2.2,-41.1C12.3,-44.9,24.5,-54.3,28.7,-50.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className=" flex items-center justify-center pt-12">
        <div className=" text-4xl max-w-md text-center relative  ">
          <div>The East Stars I-Tech, Number #1 club in UCBET</div>
        </div>
      </div>
      <div className=" relative">
        <img
          className=" dark:invert h-96 md:h-auto object-cover"
          src="/beutifulNoCaria.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
