import { quote } from "@/HypnoticData";
import { QuoteIcon } from "lucide-react";

const Quotation = () => {
  return (
    <div className=" max-w-screen-lg flex-col mx-auto h-[40svh] mt-24 flex items-center justify-center ">
      <div className=" grid grid-cols-3">
        <div className=" relative w-fit">
          <div className=" absolute top-0  right-0 p-5 shadow-lg bg-blue-600 w-fit rounded-full text-background">
            <QuoteIcon className=" fill-background" size={30} />
          </div>
          <img
            className=" size-64 rounded-full shadow border border-foreground"
            src={quote.picture}
          />
        </div>
        <div className="   col-span-2 h-full flex items-center justify-between flex-col">
          <div className=" text-2xl font-Manrope font-semibold">
            {quote.description}
          </div>
          <div className=" w-full  gap-2">
            <div className="  text-lg font-Manrope font-semibold">
              {" "}
              .✦── {quote.whoSaid}
            </div>
            <div className=" text-sm mb-0.5 font-Manrope opacity-75">
              {quote.Role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
