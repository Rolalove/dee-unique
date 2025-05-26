import { HiLightBulb } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const CoreValues = () => {
  return (
    <section className="lg:mt-20  mb-20">
      <h2 className="text-center font-semibold text-4xl text-[#1E1E1E]">
        Our Core Values
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
        <div className="h-72 w-96 bg-[#FFFE0D80] rounded-xl justify-center flex items-center">
          <div className="px-4 py-4 space-y-4 flex flex-col justify-center items-center">
            <FaGraduationCap size={80} color="#1E1E1E" />
            <p className="font-semibold text-2xl">Academic Excellence</p>
            <p className="max-w-[300px] text-base text-center font-medium">
              Fostering a culture of high achievement and critical thinking.
            </p>
          </div>
        </div>
        <div className=" w-96 h-96 bg-[#264B22] rounded-xl justify-center flex items-center">
          <div className=" px-4 py-4 space-y-4 flex flex-col justify-center items-center">
            <p className="text-[#ffffff] font-semibold text-2xl">
              Character Development
            </p>
            <p className="text-[#ffffff] max-w-[300px] text-base text-center font-medium">
              Integrity, discipline, and respect are at the heart of our
              teaching,.
            </p>
          </div>
        </div>
        <div className="h-72  w-96 bg-[#FFFE0D80] rounded-xl justify-center flex items-center">
          <div className="px-4 py-4 space-y- flex flex-col justify-center items-center">
            <HiLightBulb size={80} color="#1E1E1E" />

            <p className=" font-semibold text-2xl">Innovation & Creativity</p>
            <p className="text-base text-center font-medium max-w-[300px] ">
              We encourage problem-solving, creativity, and digital literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
