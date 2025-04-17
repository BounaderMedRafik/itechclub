import { events } from "@/db/data";
import { UpcomingEvent } from "@/db/types";
import { ArrowUpRight, MapPin } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const UpcomingEvents = () => {
  const upcomingEvents = events.filter((item) => item.upcoming);

  return (
    <div id="upcoming-event" className="wrapper p-0 border-x pt-24">
      <div className="p-5">
        <div className="text-4xl flex items-center justify-between">
          <div>Upcoming Event</div>
        </div>
        <div className="text-sm max-w-sm opacity-75 mb-4">
          An event happening soon that invites participants to connect and take
          part in planned activities.
        </div>

        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((item, i) => (
            <div key={i}>
              <EventTemplate {...item} />
            </div>
          ))
        ) : (
          <div className="text-md opacity-100 italic">
            No upcoming events at the moment.{" "}
            <Link href={"/events"} className=" text-primary hover:underline">
              Check our latest event.
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export const EventTemplate = (upcomingEvent: UpcomingEvent) => {
  return (
    <div className=" mt-12 md:grid grid-cols-2">
      <div className=" aspect-square col-span-1 p-1 border-dashed border-2">
        <img src={upcomingEvent.image} alt="" />
      </div>
      <div className="p-2 px-3 mt-8">
        <div className=" text-sm opacity-75">{upcomingEvent.date}</div>
        <div className=" text-xl flex items-center justify-between">
          <div>{upcomingEvent.title}</div>
          {upcomingEvent.upcoming && (
            <div>
              <a
                href={upcomingEvent.join}
                target="_blank"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                <div className=" flex items-center gap-2">
                  <div>Join Now</div>
                  <div>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
        <div className=" text-sm">{upcomingEvent.description}</div>
        <div className="text-sm opacity-75 flex items-center gap-2">
          <div>
            <MapPin size={14} />
          </div>
          <div>{upcomingEvent.location}</div>
        </div>
        {upcomingEvent.participants && <div className=" sep" />}

        <div className=" mt-2">
          <div className=" text-xl">
            {upcomingEvent.participants && "Trainers"}
          </div>
          <div className=" space-y-4 mt-4">
            {upcomingEvent.participants?.map((item, i) => (
              <div className="flex gap-3" key={i}>
                <div>
                  <img
                    className=" size-12 border rounded-full"
                    src={item.pfp}
                    alt=""
                  />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className=" text-sm opacity-75">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
