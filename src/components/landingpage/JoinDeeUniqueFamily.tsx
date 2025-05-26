import Link from "next/link";
import React from "react";

const JoinDeeUniqueFamily = () => {
  return (
    <section className="relative w-full h-auto">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-[url(/StudentsTogether.png)] bg-cover bg-center  bg-[#264B224D] opacity-30"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 py-16 flex flex-col  justify-center items-center  gap-y-8 px-4">
        <h2 className="text-[#000000] text-center font-semibold text-3xl">
          Join the Dee Unique Family
        </h2>
        <p className="text-[#1E1E1E] font-medium text-lg max-w-2xl text-center">
          We invite you to become part of our thriving learning community where
          students excel academically, socially, and personally.
        </p>
        <div className="flex flex-col gap-y-4 lg:gap-y-0 items-center lg:flex-row flex-wrap lg:gap-4 justify-center mt-2">
          <Link
            href=""
            className="text-[#264B22] border border-[#264B22] py-3 px-6 rounded-lg font-medium"
          >
            Visit Our Campuses
          </Link>
          <Link
            href=""
            className="text-white w-fit bg-[#264B22] py-3 px-6 rounded-lg font-medium"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinDeeUniqueFamily;
