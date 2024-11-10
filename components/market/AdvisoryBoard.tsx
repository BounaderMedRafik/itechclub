import { AdvisoryBoard } from "@/HypnoticData";
import { ArrowUpRight, UniversityIcon } from "lucide-react";
import React from "react";
import { buttonVariants } from "../ui/button";

const AdvisoryBoardComp = () => {
  return (
    <div
      id="AdvisoryBoard"
      className="bg-white py-24 max-w-screen-lg mx-auto sm:py-32"
    >
      <div className="mx-auto grid  gap-20  ">
        <div>
          <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-3xl font-Manrope">
            Advisory Board
          </div>
          <div className=" max-w-md opacity-75 text-xs font-Manrope mt-3">
            Our Advisory Board is a powerhouse of knowledge and experience.
            Their guidance empowers us to achieve new heights and make a
            significant impact.
          </div>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {AdvisoryBoard.map((person) => (
            <div key={person.name}>
              <div className="flex items-start gap-x-6 font-Manrope">
                <img
                  alt=""
                  src={person.picture}
                  className="h-16 w-16 rounded-full border border-foreground/25"
                />
                <div>
                  <div className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </div>
                  <div className=" text-xs opacity-75 w-[30ch] mt-4">
                    {person.smallDescription}
                  </div>
                  <div className=" flex items-center gap-3 mt-4">
                    <UniversityIcon size={14} />
                    <div className="text-sm/6 font-semibold  text-primary">
                      {person.role}
                    </div>
                  </div>
                  <div className=" text-xs opacity-75 mt-3">{person.email}</div>
                  <div className=" mt-3">
                    <a
                      target="_blank"
                      href={person.profile}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                        className: " px-0 py-0",
                      })}
                    >
                      <div className="flex items-center gap-2">
                        <div>View Profile</div>
                        <div>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvisoryBoardComp;
