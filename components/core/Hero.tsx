"use client";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="wrapper   hidden md:flex relative overflow-hidden select-none [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0000ff_100%)] shadow-lg shadow-black/25  ring-[2px] ring-foreground/25   w-full h-[50vh]  rounded-xl  items-center justify-center">
        <motion.img
          initial={{
            marginTop: -40,
            opacity: 0,
          }}
          animate={{
            marginTop: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          src="/el tarf logo.png"
          className=" w-32 absolute top-7 left-1/2 -translate-x-1/2 z-30 invert dark:invert-0"
        />
        <motion.div
          initial={{
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className=" font-offbit opacity-75 font-black text-9xl"
        >
          {"I-TECH"} <span className=" italic">UCBET</span>
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            x: "-50%",
            filter: "blur(10px)",
          }}
          animate={{
            y: -100,
            x: "-50%",
            filter: "blur(0px)",
            transition: {
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md z-20 mt-20 text-lg   "
        >
          <div className=" w-full  py-0.5 flex items-center justify-between  ">
            <div>
              <Link href={"/"} className=" ">
                <div className="flex items-center gap-2 px-2 py-0.5 text-xs bg-primary inset-0 rounded-full rounded-bl-none text-background">
                  <div>Latest Event</div>
                  <div>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              {" "}
              <Link href={"/"} className=" ">
                <div className="flex items-center rounded-br-none gap-2 px-2 py-0.5 text-xs bg-secondary text-foreground inset-0 rounded-full  border border-foreground/25">
                  <div>Join Us Now!</div>
                  <div>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="font-manrope text-center bg-background rounded-md rounded-t-none border-foreground/25  shadow-lg  p-5   ">
            {
              "  The East Stars I-Tech, Number #1 club in UCBET, Located At Taref and expands to all algeria  "
            }
          </div>
          <div className=" mt-6 flex items-center justify-center w-full">
            <a
              href="/#aboutus"
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              <div className="flex items-center gap-2">
                <div>See More</div>
                <div>
                  <ArrowDown size={14} />
                </div>
              </div>
            </a>
          </div>
        </motion.div>
        <div className=" absolute pointer-events-none top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_3px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div>
        <div className="wrapper  md:hidden relative overflow-hidden select-none [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0000ff_100%)] shadow-lg shadow-black/25   w-full h-[75vh]   items-center justify-center">
          <img
            src="/el tarf logo.png"
            className=" w-16 absolute top-7 left-1/2 -translate-x-1/2 z-30 invert dark:invert-0"
          />
          <div className=" font-offbit opacity-75 font-black text-5xl translate-y-20  text-center">
            {"I-TECH"} <span className=" italic">UCBET</span>
          </div>
          <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full px-4 z-20  text-lg   ">
            <div className=" w-full  py-0.5 flex items-center justify-between  ">
              <div>
                <Link href={"/"} className=" ">
                  <div className="flex items-center gap-2 px-2 py-0.5 text-xs bg-primary inset-0 rounded-full rounded-bl-none text-background">
                    <div>Latest Event</div>
                    <div>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                <Link href={"/"} className=" ">
                  <div className="flex items-center rounded-br-none gap-2 px-2 py-0.5 text-xs bg-secondary text-foreground inset-0 rounded-full  border border-foreground/25">
                    <div>Join Us Now!</div>
                    <div>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="font-manrope text-center bg-background rounded-md rounded-t-none border-foreground/25  shadow-lg  p-5   ">
              {
                "  The East Stars I-Tech, Number #1 club in UCBET, Located At Taref and expands to all algeria  "
              }
            </div>
            <div className=" mt-6 flex items-center justify-center w-full">
              <a
                href=""
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                })}
              >
                <div className="flex items-center gap-2">
                  <div>See More</div>
                  <div>
                    <ArrowDown size={14} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className=" absolute pointer-events-none top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_3px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
