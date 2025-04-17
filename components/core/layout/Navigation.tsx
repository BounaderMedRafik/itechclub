"use client";
import { buttonVariants } from "@/components/ui/button";
import { BannerContent, navItems, socials } from "@/db/data";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Menu, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2);
  const [hovered, setHovered] = useState("");

  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" hidden md:block w-full fixed top-0 left-0 z-50">
        <div className="md:pt-4">
          <div>
            <Banner />
          </div>
          <div className=" wrapper p-0 relative flex items-center justify-between  ">
            <div className=" py-2 px-3 bg-background relative border flex items-center  shadow-2xl ">
              <img
                src="/WhiteNoBG.png"
                className="invert dark:invert-0 size-12 absolute top-1/2 -translate-y-1/2 left-0 opacity-75 hover:opacity-100 transition-all"
                alt=""
              />
              <div className=" h-4 w-px bg-foreground/25 mx-4" />
              <div className="flex items-center gap-2">
                {leftNavItems.map((item, i) => (
                  <motion.div
                    onMouseEnter={() => {
                      setHovered(item.title);
                    }}
                    onMouseLeave={() => {
                      setHovered("");
                    }}
                    className="relative"
                    key={i}
                  >
                    <Link href={item.link}>
                      <div className=" px-2 py-1  text-sm opacity-75 font-mono hover:bg-accent  flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div>{!item.subItems && item.icon}</div>
                          <div> {item.title}</div>
                        </div>
                        {item.subItems && (
                          <div
                            className={cn(
                              " transition-all",
                              item.title == hovered && "rotate-180"
                            )}
                          >
                            <ChevronDown size={12} />
                          </div>
                        )}
                      </div>
                    </Link>

                    <AnimatePresence mode="wait">
                      {hovered == item.title && item.subItems && (
                        <motion.div
                          key={hovered == item.title ? "show" : "dont"}
                          initial={{
                            top: "200%",
                            opacity: 0,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            top: "100%",
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                              ease: [0.25, 1, 0.5, 1],
                            },
                          }}
                          exit={{
                            top: "200%",
                            opacity: 0,
                            filter: "blur(10px)",
                          }}
                          className=" absolute left-1/2 mt-3 top-full  border shadow -translate-x-1/2 min-w-sm bg-background  p-1.5  grid grid-cols-2"
                        >
                          <div className=" p-0.5">
                            {item.subItems.map((subitem, j) => (
                              <div key={j}>
                                <Link href={subitem.link}>
                                  <div className=" w-full  flex relative group hover:bg-accent items-center justify-start text-sm font-mono opacity-75 py-1 px-2 gap-2">
                                    <div className=" p-1  group-hover:bg-primary group-hover:text-background transition-all">
                                      {subitem.icon}
                                    </div>
                                    <div>{subitem.title}</div>
                                    <div className=" absolute top-1/2 -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-all">
                                      <ChevronRight size={14} />
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className=" bg-primary  overflow-hidden ">
                            <img
                              className=" min-h-44 h-full  "
                              src={item.image}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className=" py-2 px-3 bg-background border flex items-center  shadow-2xl ">
              <div className="flex items-center gap-2">
                {rightNavItems.map((item, i) => (
                  <motion.div
                    onMouseEnter={() => {
                      setHovered(item.title);
                    }}
                    onMouseLeave={() => {
                      setHovered("");
                    }}
                    className="relative"
                    key={i}
                  >
                    <Link href={item.link}>
                      <div className=" px-2 py-1 text-sm opacity-75 font-mono hover:bg-accent  flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div>{!item.subItems && item.icon}</div>
                          <div> {item.title}</div>
                        </div>
                        {item.subItems && (
                          <div
                            className={cn(
                              " transition-all",
                              item.title == hovered && "rotate-180"
                            )}
                          >
                            <ChevronDown size={12} />
                          </div>
                        )}
                      </div>
                    </Link>

                    <AnimatePresence mode="wait">
                      {hovered == item.title && item.subItems && (
                        <motion.div
                          key={hovered == item.title ? "show" : "dont"}
                          initial={{
                            top: "200%",
                            opacity: 0,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            top: "100%",
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                              ease: [0.25, 1, 0.5, 1],
                            },
                          }}
                          exit={{
                            top: "200%",
                            opacity: 0,
                            filter: "blur(10px)",
                          }}
                          className=" absolute  left-1/2 mt-3 top-full border shadow -translate-x-1/2 min-w-sm bg-background  p-1.5  grid grid-cols-2"
                        >
                          <div className=" p-0.5">
                            {item.subItems.map((subitem, j) => (
                              <div key={j}>
                                <Link href={subitem.link}>
                                  <div className=" w-full flex relative group hover:bg-accent items-center justify-start text-sm font-mono opacity-75 py-1 px-2 gap-2">
                                    <div className=" p-1  group-hover:bg-primary group-hover:text-background transition-all">
                                      {subitem.icon}
                                    </div>
                                    <div>{subitem.title}</div>
                                    <div className=" absolute top-1/2 -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-all">
                                      <ChevronRight size={14} />
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className=" bg-primary  overflow-hidden ">
                            <img
                              className=" min-h-44 h-full  w-full  object-cover "
                              src={item.image}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end wrapper">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* phone navigation */}
      <div className="block md:hidden w-full fixed top-0 left-0  z-50 p-2">
        <div className=" bg-background border relative  flex items-center justify-end shadow-xl p-1">
          <div>
            <img
              src="/WhiteNoBG.png"
              className="invert dark:invert-0 size-12 absolute top-1/2 -translate-y-1/2 left-2 opacity-75 hover:opacity-100 transition-all"
              alt=""
            />
          </div>

          <div className="flex items-center">
            {socials.map((item, i) => (
              <a
                className=" p-3 bg-accent"
                href={item.link}
                target="_blank"
                key={i}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div>
            <ModeToggle />
          </div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className={cn(
              " p-3 bg-accent transition-all",
              show && "bg-primary text-background"
            )}
          >
            <Menu size={14} />
          </div>

          <AnimatePresence mode="wait">
            {show && (
              <motion.div
                key={show ? "show" : "dont"}
                initial={{
                  translateY: "-100%",
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  translateY: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                exit={{
                  translateY: "-100%",
                  opacity: 0,
                  filter: "blur(10px)",
                  transition: {
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                className=" p-5 min-w-xs translate-y-full  mt-2 absolute bg-background bottom-0 right-0"
              >
                <div className=" text-lg ">Menu</div>
                <div className="sep"></div>
                {navItems.map((item, i) => (
                  <div key={i} className=" mt-2">
                    {item.subItems ? (
                      <div>{item.title}</div>
                    ) : (
                      <div>
                        <Link
                          className={buttonVariants({
                            variant: "secondary",
                            size: "sm",
                          })}
                          href={item.link}
                        >
                          <div className="flex items-center gap-2">
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                          </div>
                        </Link>
                      </div>
                    )}
                    <div className=" mt-1">
                      {item.subItems && (
                        <div className=" space-y-1">
                          {item.subItems.map((subitem, j) => (
                            <div key={j}>
                              <Link
                                className={buttonVariants({
                                  variant: "secondary",
                                  size: "sm",
                                })}
                                href={subitem.link}
                              >
                                <div className="flex items-center gap-2">
                                  <div>{subitem.icon}</div>
                                  <div>{subitem.title}</div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <div>
      {BannerContent && (
        <div className="wrapper bg-primary py-1 flex items-center justify-center text-background text-sm border">
          {BannerContent}
        </div>
      )}
    </div>
  );
};

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <div
        onClick={() => setTheme("light")}
        className=" p-3  bg-accent md:bg-background items-center justify-center hidden dark:flex md:border cursor-pointer  transition-all duration-300"
      >
        <div>
          <Sun size={14} />
        </div>
      </div>
      <div
        onClick={() => setTheme("dark")}
        className=" p-3  items-center bg-accent md:bg-background justify-center flex dark:hidden md:border cursor-pointer  transition-all duration-300"
      >
        <div>
          <Moon size={14} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
