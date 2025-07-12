import { Whoarewe } from "../components/landingpage/Whoarewe";
import CoreValues from "../components/landingpage/CoreValues";
import HeroSection from "@/components/landingpage/HeroSection";
import Programs from "@/components/landingpage/Programs";
import WhyDeeUnique from "@/components/landingpage/WhyDeeUnique";
import AcademicCalendar from "@/components/landingpage/AcademicCalendar";
import { SuccessStory } from "@/components/landingpage/SuccessStory";

export default function Home() {
  return (
    <>
      <div className="px-6 lg:px-10 container mx-auto">
        <HeroSection />
        <Whoarewe />
        <CoreValues />
        <Programs />
        <div className="flex justify-center mt-6">
          <button className="font-medium mx-auto text-center text-[#FFFFFF] bg-[#264B22] px-4 py-2 rounded-lg">
            Explore Our Curriculum
          </button>
        </div>
        <WhyDeeUnique />
        <AcademicCalendar />
        <SuccessStory />
      </div>
    </>
  );
}
