import Image from "next/image";

const WhyDeeUnique = () => {
  const listItems = [
    "Modern learning facilities with smart classrooms, advanced science & ICT labs, and well-stocked libraries.",
    "Experienced educators committed to nurturing student success.",
    "Safe and welcoming environment for holistic growth.",
    "Diverse extracurricular activities in sports, music, arts, and leadership.",
  ];

  const images = [
    { src: "/StudentIncomputerRoom2.webp", alt: "Student in science lab" },
    { src: "/studentinchemistrylab.webp", alt: "Students doing experiment" },
    { src: "/studentsplayingchess.webp", alt: "Student playing chess" },
    { src: "/studentsplayingtennis.webp", alt: "Student playing tennis" },
  ];

  return (
    <section className="mt-20 lg:mt-30 ">
      <h2 className="text-center text-4xl font-semibold">
        Why Choose Dee Unique International Schools?
      </h2>

      <div className="grid lg:grid-cols-[55%_40%] items-stretch gap-x-16 mt-12">
        {/* Image Grid Section */}
        <div className="h-[400px] lg:h-[500px]">
          {/* Mobile: Equal grid with custom order | Desktop: Absolute positioning */}
          <div className="h-full relative">
            {/* Mobile Grid Layout */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px] lg:hidden">
              {/* Image 1 - Mobile: top-left */}
              <div className="relative w-full h-full order-1">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Image 3 - Mobile: top-right */}
              <div className="relative w-full h-full order-2">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Image 2 - Mobile: bottom-left */}
              <div className="relative w-full h-full order-3">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Image 4 - Mobile: bottom-right */}
              <div className="relative w-full h-full order-4">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Desktop Absolute Positioning Layout */}
            <div className="hidden lg:block h-full relative">
              <div className="absolute top-0 left-0 w-[48%] h-[40%]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-0 right-0 w-[48%] h-[50%]">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[48%] h-[55%]">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[48%] h-[45%]">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center h-full space-y-10 max-w-[500px] text-center lg:text-left">
          <p className="text-lg lg:text-xl font-medium leading-relaxed text-left mt-4 lg:mt-0">
            At Dee Unique International Schools, we go beyond textbooks! Our
            students experience:
          </p>
          <ul className="space-y-6">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Image
                  src="/Tick.svg"
                  width={30}
                  height={30}
                  alt="Check icon"
                />
                <span className="text-left text-lg font-medium text-[#1E1E1E]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="font-medium text-white bg-[#264B22] px-6 py-3 rounded-lg self-center lg:self-start">
            Visit Our Campuses
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDeeUnique;
