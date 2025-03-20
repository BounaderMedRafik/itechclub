import AboutUs from "@/components/core/AboutUs";
import Hero from "@/components/core/Hero";
import NavigationBar from "@/components/core/NavigationBar";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <div className=" h-svh" />
    </div>
  );
}
