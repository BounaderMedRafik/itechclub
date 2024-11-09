"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import MyLogo from "../brand/MyLogo";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Links } from "@/HypnoticData";
import { useRouter } from "next/router"; // Import useRouter
import { usePathname } from "next/navigation";

const Navigation = () => {
  // Get the router object
  const currentPath = usePathname(); // Get the current path

  // Define the paths where we want to hide "Advisory Board" and "Team"
  const hiddenPaths = ["/membership", "/events", "/aboutus"];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* <div>
        <Banner />
      </div> */}
      <div className="py-3 w-full border-b border-b-foreground bg-background flex items-center justify-center">
        <div className="max-w-screen-lg w-full flex items-center justify-between">
          <div>
            <MyLogo />
          </div>
          <div className="flex items-center gap-0.5">
            {Links.map((item, i) => {
              // Check if the current path is in hiddenPaths
              if (
                hiddenPaths.includes(currentPath) &&
                (item.title === "Advisory Board" || item.title === "Team")
              ) {
                return null; // Don't render these items
              }
              return (
                <div key={i}>
                  <Link
                    href={item.href}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <div className="flex items-center gap-2">
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <div>
            <Link href={"/"}>
              <div
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                  className:
                    "group relative overflow-hidden border border-foreground",
                })}
              >
                <div className="inline-flex translate-y-0 items-center justify-center px-6 transition duration-300 group-hover:-translate-y-[150%]">
                  Join Us
                </div>
                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-background text-foreground transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                  <span className="z-10 text-foreground">Right Now!</span>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <>
      <div className="font-Manrope py-2.5 bg-primary flex justify-center items-center">
        <div className="flex items-center text-xs opacity-75 text-background gap-3">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>
            <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
