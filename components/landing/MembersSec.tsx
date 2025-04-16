"use client";
import { members } from "@/db/data";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Link,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import Masonry from "react-masonry-css";

const MembersSec = () => {
  const breakpointColumnsObj = {
    default: 3, // 4 columns on large screens
    1100: 3, // 3 columns on medium screens
    768: 2, // 2 columns on tablets
    500: 2, // 1 column on mobile
  };
  return (
    <div id="team" className=" wrapper overflow-x-clip pt-24 border-x ">
      <div className=" p-5">
        <div className=" text-4xl ">Our Team</div>
        <div className=" text-sm max-w-sm opacity-75">
          Meet the minds behind I-Tech Club — a team united by a passion for
          shaping tech's future through collaboration and innovation.
        </div>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto relative"
        columnClassName="masonry-column"
      >
        <svg
          className=" absolute z-20 w-44 top-0 right-0 translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M27.6,-46.1C38.4,-41.5,51.8,-39.5,62.8,-32.3C73.9,-25.1,82.6,-12.5,79.3,-1.9C75.9,8.7,60.5,17.3,51.2,27.6C41.9,37.9,38.8,49.9,31.3,60.8C23.8,71.8,11.9,81.8,-2,85.3C-15.9,88.7,-31.7,85.6,-37.7,73.7C-43.6,61.8,-39.6,41.2,-43.4,27.4C-47.2,13.7,-58.9,6.9,-58.6,0.2C-58.2,-6.5,-45.9,-12.9,-42.2,-26.8C-38.4,-40.7,-43.2,-61.9,-37.6,-69.6C-32,-77.2,-16,-71.3,-3.8,-64.7C8.4,-58.1,16.7,-50.8,27.6,-46.1Z"
            transform="translate(100 100)"
          />
        </svg>
        {members.map((item, i) => (
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

export default MembersSec;
