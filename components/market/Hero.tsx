import { ArrowUpRight, Sparkles, Sticker } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div
        id="Home"
        className=" max-w-screen-lg flex-col mx-auto pt-24 flex items-center  justify-center  "
      >
        <div className=" text-5xl relative font-Manrope  text-center font-semibold ">
          The East Stars I-Tech,
          <br /> Number #1 club in{" "}
          <span className=" italic text-primary ">UCBET</span>
          <div className=" absolute -top-3 -right-6 rotate-12">
            <Sparkles className=" fill-foreground" size={50} />
          </div>
          <div className=" absolute -top-3 -left-6 -rotate-12">
            <Sticker className="" size={50} />
          </div>
        </div>

        <div className=" max-w-xs text-sm opacity-75 text-center mt-3.5 font-Manrope">
          Lorem ipsum dolor sit amet{" "}
          <span className=" px-1  border border-foreground mx-1 rounded-md">
            consectetur
          </span>{" "}
          adipisicing{" "}
          <span className="px-1  border border-foreground mx-1 rounded-md">
            elit
          </span>
          . Optio qui ipsam eos!
        </div>

        <div className="flex items-center gap-0.5 mt-7">
          {/* <Button size={"lg"}>
            <div className=" flex items-center gap-2">
              <div>Join Us</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Button> */}
          <Button size={"lg"} variant={"harshOutline"}>
            <div className=" flex items-center gap-2">
              <div>Know More</div>
              <div>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </Button>
        </div>
        <div className=" mt-12 border border-transparent transition-all duration-300 ease-in-out hover:border-foreground/25 rounded-3xl overflow-hidden group ">
          <img
            className=" group-hover:scale-125  transition-all duration-300 ease-in-out  group-hover:opacity-100"
            src="/beutifulNoCaria.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
