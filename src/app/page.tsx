import { Whoarewe } from "../components/landingpage/Whoarewe";
import CoreValues from "../components/landingpage/CoreValues";
import HeroSection from "@/components/landingpage/HeroSection";
import Programs from "@/components/landingpage/Programs";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
        <Whoarewe />
        <CoreValues />
        <Programs />
      </div>
    </>
  );
}
