import { quote } from "@/db/data";
import React from "react";

const QuotationSec = () => {
  return (
    <div id="about" className=" bg-primary w-full group ">
      <div className=" wrapper border-x border-x-accent/10  min-h-44 p-5 relative ">
        <img
          className=" md:absolute mb-3 md:mb-0 top-0 md:group-hover:scale-125 group-hover:rotate-0 transition-all right-0 pointer-events-none md:-translate-y-1/2 md:rotate-12 md:translate-x-1/2 size-24 object-cover rounded-full border-2 shadow-2xl"
          src={quote.person.pfp}
          alt=""
        />

        <svg
          className=" absolute z-30 bottom-0 pointer-events-none left-0 w-52 translate-y-1/2  -translate-x-1/2 "
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M45.9,-56.7C52.4,-49.3,45.6,-28.1,47.6,-9.5C49.6,9.1,60.4,25.1,55.7,31C50.9,36.9,30.7,32.7,17.3,29.9C4,27.1,-2.4,25.7,-18.4,29.1C-34.3,32.6,-59.7,40.9,-63.1,36C-66.5,31.1,-47.8,13,-40.4,-3.4C-33,-19.7,-37,-34.3,-32.2,-42C-27.4,-49.8,-13.7,-50.6,3,-54.2C19.7,-57.8,39.4,-64.2,45.9,-56.7Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className=" text-background text-4xl  relative z-40 ">
          {quote.quote}
        </div>
        <div className=" mt-8 text-background relative z-40">
          <div className=" py-0.5 px-2 bg-background text-primary w-fit ">
            {quote.person.name}
          </div>
          <div className="py-0.5 px-2 bg-background text-primary w-fit mt-1">
            {quote.person.role}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationSec;
