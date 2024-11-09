import { AboutUsInfos } from "@/HypnoticData";
import React from "react";

const AboutUsPageContent = () => {
  return (
    <>
      <img
        className=" w-full h-96 object-cover opacity-75 -mt-14 rounded-none"
        src="/membership.jpg"
        alt=""
      />
      <div className=" max-w-screen-lg mx-auto pt-14">
        <div>
          <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-3xl font-Manrope">
            About Us
          </div>
          <div className=" max-w-md opacity-75 text-xs font-Manrope mt-3">
            Join us on a journey of discovery and innovation. I-Tech Club is
            more than just a club; it&apos;s a movement that empowers students
            to shape the future.
          </div>
        </div>

        <div className=" font-Manrope mt-24">
          <AboutUsInfos />
        </div>
      </div>
    </>
  );
};

export default AboutUsPageContent;
