import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full mt-10 mb-20 flex flex-col-reverse lg:mt-20 lg:justify-between lg:flex-row px-6 lg:px-10 lg:gap-8">
      <div className="flex flex-col justify-center  lg:items-start gap-8 w-full lg:w-[40%]">
        <div className="flex flex-col  items-center lg:items-start">
          <h2 className="text-center lg:text-left text-[#264B22] font-semibold text-[35px]">
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

        <p className="text-[#1E1E1E] text-center lg:text-left font-medium text-[20px]">
          A world-class learning environment from Nursery to Secondary School,
          fostering academic success and strong character development.
        </p>
        <div className="flex justify-between  gap-6">
          <button className="text-[#264B22] w-fit border border-[#264B22] px-4 py-2 rounded-xl text-xl font-medium">
            Apply Now
          </button>
          <button className="bg-[#264B22] w-fit text-white px-4 py-2 rounded-xl text-xl font-medium">
            Apply Now
          </button>
        </div>
      </div>
      {/* <div className="relative w-full  min-h-[412px] lg:w-[60%] ">
        <Image
          src="/video.png"
          alt="Dee unique building"
          quality={100}
          fill
          className="object-contain rounded-xl"
        />
      </div> */}
      <div className="relative w-full h-[40vh] lg:h-[412px] lg:w-[60%]">
        <Image
          src="/video.png"
          alt="Dee unique building"
          quality={100}
          fill
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
