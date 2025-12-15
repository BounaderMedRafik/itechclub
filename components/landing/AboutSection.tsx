"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { features } from "@/db/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section
      id="who-are-we"
      className="wrapper overflow-x-clip md:overflow-visible border-x relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 2000 2000"
        className=" absolute bottom-0 left-0 -translate-x-[60%] translate-y-[40%] w-44"
      >
        <g>
          <g
            fill="hsl(335, 77%, 50%)"
            strokeWidth="45"
            stroke="hsl(335, 100%, 32%)"
            id="star"
            transform="matrix(0.017452406437283376,0.9998476951563913,-0.9998476951563913,0.017452406437283376,2215.6714217414537,-254.6836191611626)"
          >
            <path
              d="M 500 500 C 1048.5708613009833 1000.6303447251573 1048.5708613009833 1000.6303447251573 1974.8394077138482 626.2258848695119 C 1048.5708613009833 1000.6303447251573 1048.5708613009833 1000.6303447251573 1500 1500 C 1048.5708613009833 1000.6303447251573 1048.5708613009833 1000.6303447251573 500 1500 C 1048.5708613009833 1000.6303447251573 1048.5708613009833 1000.6303447251573 500 500"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </g>
      </svg>
      <div className=" relative">
        <svg
          className=" w-44 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M28.6,-51.3C35.7,-45.5,39,-35,49,-25.6C59.1,-16.3,75.8,-8.1,82.8,4C89.9,16.2,87.1,32.5,76.9,41.5C66.7,50.6,49,52.4,34.9,51.2C20.9,50.1,10.4,45.9,1.2,43.9C-8.1,41.8,-16.1,41.8,-26.8,41C-37.5,40.3,-50.9,38.7,-57.4,31.7C-63.9,24.7,-63.5,12.4,-65.2,-1C-67,-14.4,-70.9,-28.8,-64.1,-35.1C-57.2,-41.4,-39.5,-39.6,-27,-42.2C-14.5,-44.9,-7.3,-52,1.8,-55C10.8,-58.1,21.6,-57,28.6,-51.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src="/chabiba.png" className=" h-64 w-full object-cover" alt="" />
      </div>

      <div className=" p-5 md:grid grid-cols-2">
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
              ease: [0.25, 1, 0.5, 1],
              duration: 2,
            },
          }}
          className=" text-4xl w-full "
        >
          Who are we ?
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",

            transition: {
              ease: [0.25, 1, 0.5, 1],
              duration: 1,
              delay: 0.5,
            },
          }}
          className=" relative z-40 mt-3 md:mt-0 "
        >
          We are <span className=" bg-accent">I-Tech</span> Scientific Club, a
          powerhouse of tech innovation nestled in El Taref! We&apos;re not just
          a club; we&apos;re a collective of passionate minds diving deep into
          the world of IT. From coding wizardry to cutting-edge projects,
          we&apos;re constantly pushing boundaries and exploring the digital
          frontier. We&apos;re cool, we&apos;re creative, and we&apos;re
          building the future, one line of code at a time.
        </motion.div>
      </div>

      <div className=" p-5 md:grid grid-cols-2">
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
              ease: [0.25, 1, 0.5, 1],
              duration: 2,
            },
          }}
          className=" text-4xl "
        >
          What do we do ?
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",

            transition: {
              ease: [0.25, 1, 0.5, 1],
              duration: 1,
              delay: 0.5,
            },
          }}
          className=" relative z-40 mt-3 md:mt-0 "
        >
          At iTech Scientific Club, we&apos;re driven by a passion to explore
          and create within the vast landscape of Information Technology.
          We&apos;re not just passive observers; we&apos;re active participants,
          diving into a diverse range of projects and initiatives. From crafting
          innovative software solutions that address real-world challenges to
          delving into the intricacies of cybersecurity, ensuring digital
          safety, we&apos;re constantly pushing the boundaries of what&apos;s
          possible. We build and program robots, explore the exciting world of
          hardware, and design captivating websites that bring ideas to life. We
          also delve into the power of data through data science and artificial
          intelligence, and share our knowledge through engaging workshops and
          hackathons. Beyond our technical pursuits, we&apos;re committed to
          giving back to our community, leveraging our skills to develop
          projects that make a tangible difference. In essence, iTech Scientific
          Club is a hub of innovation, where we learn, collaborate, and build
          the future, one project at a time.
        </motion.div>
      </div>

      <div className=" md:grid grid-cols-3">
        {features.map((item, i) => (
          <div key={i}>
            <div className={cn(`md:aspect-square md:border-l md:border-y p-5`)}>
              <div
                style={{
                  backgroundColor: item.bgColor,
                }}
                className=" w-fit p-4 "
              >
                {item.icon}
              </div>

              <div className=" text-2xl mt-4">{item.title}</div>
              <div className=" text-sm opacity-75">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex items-center justify-end">
        <Link href={"/events"}>
          <div
            className={buttonVariants({
              variant: "default",
            })}
          >
            <div>Gallery</div>
            <div>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
