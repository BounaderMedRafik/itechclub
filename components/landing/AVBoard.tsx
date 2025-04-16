"use client";
import { superVisors } from "@/db/data";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import Masonry from "react-masonry-css";

const AVBoard = () => {
  const breakpointColumnsObj = {
    default: 3, // 4 columns on large screens
    1100: 3, // 3 columns on medium screens
    768: 2, // 2 columns on tablets
    500: 2, // 1 column on mobile
  };
  return (
    <div id="advisory-board" className=" wrapper border-x">
      <div className=" p-5 pt-28">
        <div className=" text-4xl ">Advisory Board </div>
        <div className=" text-sm max-w-sm opacity-75">
          Our Advisory Board is a powerhouse of knowledge and experience. Their
          guidance empowers us to achieve new heights and make a significant
          impact.
        </div>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto relative"
        columnClassName="masonry-column"
      >
        {superVisors.map((item, i) => (
          <div key={i} className=" border group">
            <div className=" relative">
              <img
                className=" absolute z-20 h-full w-full object-cover opacity-0 transition-all group-hover:opacity-100 duration-300 ease-in-out"
                src={item.images}
                alt=""
              />
              <img
                src={item.pfp}
                alt={item.fullname}
                className={cn(
                  "aspect-square  dark:mix-blend-saturation brightness-200",
                  item.fullname == "Hussein Islem" ? "brightness-100" : ""
                )}
              />
            </div>

            <div className="">
              <div className=" p-2 ">
                <div className="text-lg">{item.fullname}</div>
                <div className=" font-mono text-sm opacity-75">{item.role}</div>
                <div className=" mt-3 text-xs md:text-base">
                  {item.description}
                </div>
              </div>

              <div className="flex">
                {item.socials.insta && (
                  <a href={item.socials.insta} target="_blank">
                    <div className=" size-8 flex items-center justify-center bg-accent">
                      <Instagram size={14} />
                    </div>
                  </a>
                )}
                {item.socials.facebook && (
                  <a href={item.socials.facebook} target="_blank">
                    <div className=" size-8 flex items-center justify-center bg-accent">
                      <Facebook size={14} />
                    </div>
                  </a>
                )}
                {item.socials.linkedin && (
                  <a href={item.socials.linkedin} target="_blank">
                    <div className=" size-8 flex items-center justify-center bg-accent">
                      <Linkedin size={14} />
                    </div>
                  </a>
                )}
                {item.socials.twitter && (
                  <a href={item.socials.twitter} target="_blank">
                    <div className=" size-8 flex items-center justify-center bg-accent">
                      <Twitter size={14} />
                    </div>
                  </a>
                )}
                {item.socials.website && (
                  <a href={item.socials.website} target="_blank">
                    <div className=" size-8 flex items-center justify-center bg-accent">
                      <ArrowUpRight size={14} />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default AVBoard;
