import AboutSection from "@/components/landing/AboutSection";
import AVBoard from "@/components/landing/AVBoard";
import Hero from "@/components/landing/Hero";
import MembersSec from "@/components/landing/MembersSec";
import QuotationSec from "@/components/landing/QuotationSec";
import UpcomingEvents from "@/components/landing/UpcomingEvents";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuotationSec />
      <AboutSection />
      <MembersSec />
      <AVBoard />
      <UpcomingEvents />
      <div className=" min-h-[25vh] border-x wrapper flex items-center justify-center">
        <a
          href="/#home"
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
}
