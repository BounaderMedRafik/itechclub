import { Team } from "@/HypnoticData";
import { User } from "lucide-react";

export const TeamSection = () => {
  return (
    <div id="Team" className="py-24 max-w-screen-lg mx-auto sm:py-32">
      <div className="mx-auto grid  gap-20  ">
        <div>
          <div className=" w-full  font-PLAYFAIRE text-xl  text-center md:text-start md:text-3xl font-Manrope">
            Our Team
          </div>
          <div className=" max-w-md opacity-75 text-xs font-Manrope mt-3">
            Meet the minds behind I-Tech Club. Our team is driven by a shared
            vision of shaping the future of technology. Together, we inspire,
            collaborate, and innovate.
          </div>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {Team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 font-Manrope">
                <img
                  alt=""
                  src={person.picture}
                  className=" size-24 rounded-full border border-foreground/25 object-cover"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className=" text-xs opacity-75 w-[30ch]">
                    {person.description}
                  </p>
                  <div className=" flex items-center gap-3 mt-4">
                    <User size={14} />
                    <p className="text-sm/6 font-semibold  text-primary">
                      {person.position}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
