import Image from "next/image";
import { Navbar } from "../components/sharedcomponent/Navbar";
import { Whoarewe } from "../components/landingpage/Whoarewe";
import CoreValues from "../components/landingpage/CoreValues";
import Footer from "../components/sharedcomponent/Footer";
import JoinDeeUniqueFamily from "../components/landingpage/JoinDeeUniqueFamily";
import HeroSection from "@/components/landingpage/HeroSection";
import InfoCard from "@/components/sharedcomponent/InfoCard";
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
