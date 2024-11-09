import AdvisoryBoardComp from "@/components/market/AdvisoryBoard";
import Hero from "@/components/market/Hero";
import QuestionAnswerSec from "@/components/market/QandA";
import Quotation from "@/components/market/Quotation";
import { TeamSection } from "@/components/market/TeamSection";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Quotation />
      </div>
      <div>
        <QuestionAnswerSec />
      </div>
      <div>
        <TeamSection />
      </div>
      <div>
        <AdvisoryBoardComp />
      </div>
      <div className=" h-[10vh]"></div>
    </div>
  );
}
