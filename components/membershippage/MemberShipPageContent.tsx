import { MembershipCards, WorkShops } from "@/HypnoticData";
import { ArrowRight } from "lucide-react";
import React from "react";

const MemberShipPageContent = () => {
  return (
    <>
      <img
        className=" w-full h-96 object-cover opacity-75 -mt-14 rounded-none"
        src="/membership.jpg"
        alt=""
      />
      <div className=" max-w-screen-lg mx-auto pt-14">
        <div>
          <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-3xl font-Manrope">
            Membership
          </div>
          <div className=" max-w-md opacity-75 text-xs font-Manrope mt-3">
            Join our vibrant community of tech enthusiasts and be part of
            something bigger. As a member of I-Tech Club, you&apos;ll have the
            chance to learn, grow, and make a difference.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {MembershipCards.map((item, i) => (
              <div
                key={i}
                className="rounded-lg hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] border-foreground/10 border shadow-lg p-5 flex flex-col items-center text-center"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="font-Manrope text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-Manrope text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-14">
          <WorkShopsComponent />
        </div>
      </div>
    </>
  );
};

const WorkShopsComponent = () => {
  return (
    <>
      <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-3xl font-Manrope">
        Workshops
      </div>
      <div className=" max-w-md opacity-75 text-xs font-Manrope mt-3">
        Ignite your passion for technology with our exciting workshops. Learn
        from the best and build your future, one skill at a time.
      </div>
      <div className="font-Manrope relative h-full">
        {WorkShops.map((item, i) => (
          <>
            <div
              key={i}
              className="flex pt-12 items-center justify-center overflow-hidden"
            >
              <div className="flex  flex-col h-full gap-6 md:flex-row items-center">
                <div className="w-full md:w-1/2 lg:pr-32">
                  <div className="flex items-center gap-2">
                    <ArrowRight size={15} />
                    <div className="text-xl font-bold">{item.title}</div>
                  </div>
                  <div className="mt-2">{item.description}</div>
                </div>
                <div className="w-full md:w-1/2 flex   justify-center md:justify-end">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sticky"
                  />
                </div>
              </div>
            </div>
            <div className=" bg-foreground/25 w-1/3 h-0.5 mt-14 mx-auto rounded-full border border-dashed" />
          </>
        ))}
      </div>
    </>
  );
};

export default MemberShipPageContent;
