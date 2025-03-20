import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import {
  Code,
  HeartCrack,
  Info,
  LeafyGreen,
  Users,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Card 1",
    description: "This is the first card.",
    color: "#f07167", // Coral Red
    colSpan: 2, // Occupy 2 columns
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    color: "#90be6d", // Leaf Green
    colSpan: 1,
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    color: "#43aa8b", // Teal Blue
    colSpan: 1,
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    color: "#f9c74f", // Sunflower Yellow
    colSpan: 2,
  },
];

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="wrapper min-h-[50vh]  mt-10 justify-center  pt-24"
    >
      <div>
        <div className=" block space-y-4 md:space-y-0 md:flex items-center justify-between">
          <div>
            <div className=" text-2xl md:text-5xl font-bold font-offbit opacity-75">
              About Us
            </div>
            <div className=" md:max-w-sm w-2/3 md:w-full opacity-50  text-xs md:text-sm font-manrope mt-0 md:mt-1.5">
              Discover the possibilities with To learn and achieve your dreams
              with our club I-Tech
            </div>
          </div>
          <div>
            <Link
              href={"/aboutus"}
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
            >
              <div className="flex items-center gap-2">
                <div>Know More</div>
                <div>
                  <Info size={13} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full group h-96 rounded-lg border relative border-transparent transition-all duration-300 ease-in-out shadow-lg shadow-transparent hover:shadow-black/10 hover:border-foreground/10 mt-4 overflow-hidden">
          <img
            className="  group-hover:scale-110 transition-all duration-300 object-cover ease-in-out absolute top-0 left-0 h-full w-full"
            src="/beutifulNoCaria.png"
            alt=""
          />
        </div>

        <div className=" block space-y-3 md:space-y-0 md:grid grid-cols-5 gap-2 mt-5">
          {/* ;card; */}
          <div className=" col-span-3 rounded-lg overflow-hidden md:opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out cursor-default">
            <div className=" p-5 bg-teal-800 text-background">
              <Code size={24} />
              <div className=" mt-3 text-xl font-manrope font-bold ">
                Coding Workshops
              </div>
              <div className="text-xs opacity-75  font-manrope">
                Join our hands-on coding workshops where you can learn various
                programming languages and frameworks. Perfect for beginners and
                advanced coders alike!
              </div>
            </div>
          </div>

          {/* ;card; */}
          <div className=" col-span-2 rounded-lg overflow-hidden md:opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out cursor-default">
            <div className=" p-5 bg-orange-800 text-background">
              <LeafyGreen size={24} />
              <div className=" mt-3 text-xl font-manrope font-bold ">
                Hackathons
              </div>
              <div className="text-xs opacity-75  font-manrope">
                Participate in exciting hackathons to showcase your skills,
                collaborate with peers, and win amazing prizes!
              </div>
            </div>
          </div>

          {/* ;card; */}
          <div className=" col-span-2 rounded-lg overflow-hidden md:opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out cursor-default">
            <div className=" p-5 bg-blue-800 text-background">
              <Users size={24} />
              <div className=" mt-3 text-xl font-manrope font-bold ">
                Guest Speaker Series
              </div>
              <div className="text-xs opacity-75  font-manrope">
                Attend our guest speaker events featuring industry professionals
                who share insights and experiences from the tech world.
              </div>
            </div>
          </div>

          {/* ;card; */}
          <div className=" col-span-3 rounded-lg overflow-hidden md:opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out cursor-default">
            <div className=" p-5 bg-pink-800 text-background">
              <Workflow size={24} />
              <div className=" mt-3 text-xl font-manrope font-bold ">
                Project Collaborations
              </div>
              <div className="text-xs opacity-75  font-manrope">
                Collaborate on exciting tech projects with fellow club members.
                Enhance your skills and build a portfolio while working on
                real-world applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
