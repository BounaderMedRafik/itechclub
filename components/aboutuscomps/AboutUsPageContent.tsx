import { AboutUsInfos } from "@/HypnoticData";
import React from "react";

const AboutUsPageContent = () => {
  return (
    <>
      <img
        className=" w-full h-96 object-cover opacity-75 -mt-14 rounded-none"
        src="https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/429989400_122126059334165657_8223564828954276170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEADVO8Dwq1v5CzPXgpTgW3pGC_CE4uHc2kYL8ITi4dzeZ8IhhFhkMFXvHmklfHzL3tLrJVjYdDpJeIJbdvSQjV&_nc_ohc=pae9B5MyeTAQ7kNvgHEItzI&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=At0CRHpLQ_c6jrsMAugZVVI&oh=00_AYCre0KElVIzbRGzTJaw7sEDquJPH82EZurq-Mv5lRloqQ&oe=6736B0AC"
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
