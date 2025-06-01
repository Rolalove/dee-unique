import { HiLightBulb } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const CoreValues = () => {
  return (
    <section className="mt-20 lg:mt-30 ">
      <h2 className="text-center font-semibold text-4xl text-[#1E1E1E] mb-8">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10">
        {/* Card 1 */}
        <div className="h-64 w-full max-w-xs bg-[#FFFE0D80] rounded-xl flex flex-col justify-between items-center p-6">
          <FaGraduationCap size={80} color="#1E1E1E" />
          <div className="text-center">
            <p className="font-semibold text-2xl mt-4">Academic Excellence</p>
            <p className="text-lg font-medium mt-2">
              Fostering a culture of high achievement and critical thinking.
            </p>
          </div>
        </div>

        {/* Card 2 (taller) */}
        <div className="h-80 w-full max-w-xs bg-[#264B22] rounded-xl flex flex-col justify-between items-center p-6">
          <Image
            src="/mdi_teaching.svg"
            width={80}
            height={80}
            alt="A teacher"
          />
          <div className="text-center text-white">
            <p className="font-semibold text-2xl mt-4">Character Development</p>
            <p className="text-lg font-medium mt-2">
              Integrity, discipline, and respect are at the heart of our
              teaching.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-64 w-full max-w-xs bg-[#FFFE0D80] rounded-xl flex flex-col justify-between items-center p-6">
          <HiLightBulb size={80} color="#1E1E1E" />
          <div className="text-center">
            <p className="font-semibold text-2xl mt-4">
              Innovation & Creativity
            </p>
            <p className="text-lg font-medium mt-2">
              We encourage problem-solving, creativity, and digital literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
