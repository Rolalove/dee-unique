import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Whoarewe = () => {
  return (
    <section className="grid grid-cols-1 lg:[grid-template-columns:3fr_2fr] lg:mt-30 place-content-center place-items-center gap-8 ">
      <div className="order-1 lg:order-1">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-6">
          {/* First image (landscape on mobile, full height on desktop) */}
          <div className="flex-shrink-0">
            <Image
              src="/Whoweare1.webp"
              width={300}
              height={505}
              quality={100}
              priority
              alt="   together wearing sport wear"
              className="w-full h-[200px] lg:w-[300px] lg:h-[505px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 place-content-between gap-4">
            <Image
              src="/Whoweare2.webp"
              width={396}
              height={264}
              quality={100}
              priority
              alt="Student together wearing sport wear"
              className="w-full h-[120px] lg:w-full lg:h-[264px] object-cover rounded-lg"
            />
            <Image
              src="/Whoweare3.webp"
              width={396}
              height={223}
              quality={100}
              priority
              alt="Student together wearing sport wear"
              className="w-full h-[120px] lg:w-full lg:h-[223px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="space-y-[40px] max-w-[500px] order-2 lg:order-2 text-center lg:text-left">
        <h2 className="font-semibold text-[28px] lg:text-[35px] text-[#1E1E1E]">
          Who We Are
        </h2>
        <p className="text-lg lg:text-xl font-medium leading-relaxed">
          Dee Unique International Schools is dedicated to providing quality
          education in a safe and inspiring environment. With campuses in Lagos
          (Nursery, Primary & Secondary) and Ogun State (Secondary Boarding), we
          offer a holistic curriculum designed to shape confident, intelligent,
          and responsible individuals.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            className="bg-[#264B22] py-[11px] px-6 text-base text-[#ffffff] rounded-xl inline-block hover:bg-[#1e3a1a] transition-colors"
            href="/"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};
