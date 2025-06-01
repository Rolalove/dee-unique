"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className=" w-full mt-10 mb-20 flex flex-col-reverse lg:mt-20 lg:justify-between lg:flex-row  lg:gap-10">
      <div className="flex flex-col justify-center mt-6 lg:mt-0 lg:items-start gap-8 w-full lg:w-[40%] ">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=""
        >
          <div className="flex flex-col  items-center lg:items-start">
            <h2 className="text-center lg:text-left text-[#264B22] font-semibold text-[30px] lg:text-[35px] ">
              Nurturing Excellence, Inspiring Future Leaders
            </h2>
            <Image
              src="/Vector.svg"
              width={429}
              height={26}
              alt="Vector"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-[#1E1E1E] text-center lg:text-left font-medium text-[20px] mb-4">
            A world-class learning environment from Nursery to Secondary School,
            fostering academic success and strong character development.
          </p>
          <div className="flex justify-between mt-6 lg:mt-0 lg:justify-start   lg:gap-6">
            <button className="text-[#264B22] w-fit border border-[#264B22] px-4 py-2 rounded-xl text-xl font-medium">
              Apply Now
            </button>
            <button className="bg-[#264B22] w-fit text-white px-4 py-2 rounded-xl text-xl font-medium">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
      <div className="relative w-full  lg:w-[55%] overflow-hidden">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl block"
          >
            <source src="/landing-video.mp4"></source>
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
