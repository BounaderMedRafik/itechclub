"use client";
import { EventTemplate } from "@/components/landing/UpcomingEvents";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { events } from "@/db/data";
import { ArrowUp } from "lucide-react";
import React from "react";
import Masonry from "react-masonry-css";

const EventsPageContent = () => {
  const breakpointColumnsObj = {
    default: 3, // 4 columns on large screens
    1100: 3, // 3 columns on medium screens
    768: 2, // 2 columns on tablets
    500: 2, // 1 column on mobile
  };
  return (
    <div id="home" className="wrapper pt-5 ">
      <div className="text-4xl flex items-center justify-between">
        <div>Events</div>
      </div>
      <div className="text-sm max-w-sm opacity-75 mb-4">
        Discover our latest events designed to inspire, connect, and engage our
        community through meaningful experiences.
      </div>

      <div className="flex flex-wrap items-center gap-1">
        {events.toReversed().map((item, i) => (
          <div key={i}>
            <a
              className={buttonVariants({
                variant: "secondary",
                size: "sm",
              })}
              href={`/events/#${item.title.replace(/\s+/g, "-")}`}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      <div>
        {events.toReversed().map((item, i) => (
          <div id={item.title.replace(/\s+/g, "-")} key={i}>
            <EventTemplate {...item} />

            {item.showcaseImages && (
              <div className=" p-2 mb-3 mt-4 text-xl">
                • Momments from <span className=" italic">{item.title}</span>{" "}
                Event
              </div>
            )}
            <div>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto relative gap-2"
                columnClassName="masonry-column"
              >
                {item.showcaseImages?.map((image, i) => (
                  <div key={i} className=" p-1 border-2 border-dashed ">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img className=" " src={image} alt={image} />
                      </DialogTrigger>
                      <DialogContent className=" p-1 rounded-none focus-visible:outline-none">
                        <DialogTitle className=" hidden" />
                        <img className=" " src={image} alt={image} />
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </Masonry>
            </div>
            <div className="sep" />
          </div>
        ))}
      </div>

      <div className=" min-h-[25vh] border-x wrapper flex items-center justify-center">
        <a
          href="/events#home"
          className=" flex items-center gap-2 text-sm opacity-75"
        >
          <div>Get back to top</div>
          <div>
            <ArrowUp size={13} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default EventsPageContent;
