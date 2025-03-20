"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Members",
    link: "/members",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const NavigationBar = () => {
  const path = usePathname();
  return (
    <div className=" w-full shadow-md flex bg-background/75 backdrop-blur-md  z-50 items-center justify-center fixed top-0 left-0">
      <div className=" wrapper py-5 w-full flex items-center justify-between">
        <div>I-TECH | UCBET</div>
        <div className="flex items-center gap-2">
          <div className=" items-center gap-0 hidden md:flex">
            {navbarLinks.map((item, i) => {
              return (
                <div key={i} className=" relative group">
                  <Link
                    href={item.link}
                    className=" text-sm relative py-1 px-4 py-0.2 h-4"
                  >
                    {item.name}
                    {item.link == path ? (
                      <div className=" size-1 group-hover:w-1/2  group-hover:h-0.5 transition-all rounded-full bg-foreground/75 absolute bottom-0 left-1/2 -translate-x-1/2" />
                    ) : (
                      <div className="    w-0  transition-all group-hover:w-1/2 h-0.5  z-10 rounded-full bg-foreground/75 absolute bottom-0 left-1/2 -translate-x-1/2" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
          <div>
            <Link
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
              href={"/join-us"}
            >
              Join Us!
            </Link>
          </div>
          <div className=" flex md:hidden">
            <MegaMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

const MegaMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        size={"icon"}
        variant={"secondary"}
        onClick={() => setShow(!show)}
      >
        {show ? <X size={13} /> : <Menu size={13} />}
      </Button>
      <div
        className={`${
          show ? "translate-y-14 opacity-100" : "translate-y-[-100%] opacity-0"
        } transition-all shadow-md duration-300 ease-in-out absolute  top-0 left-0 w-full bg-background backdrop-blur-md p-4`}
      >
        {navbarLinks.map((item, i) => (
          <div key={i} className="py-2">
            <Link href={item.link}>
              <div className="flex items-center justify-between">
                <div>{item.name}</div>
                <div>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
