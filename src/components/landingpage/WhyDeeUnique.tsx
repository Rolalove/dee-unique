import Image from "next/image";

const WhyDeeUnique = () => {
  const listItems = [
    "Modern learning facilities with smart classrooms, advanced science & ICT labs, and well-stocked libraries.",
    "Experienced educators committed to nurturing student success.",
    "Safe and welcoming environment for holistic growth.",
    "Diverse extracurricular activities in sports, music, arts, and leadership.",
  ];

  const images = [
    { src: "/StudentInLab.png", alt: "Student in science lab" },
    { src: "/StudentInLab.png", alt: "Students in smart classroom" },
    { src: "/StudentInLab.png", alt: "Student using computer in ICT lab" },
    { src: "/StudentInLab.png", alt: "Student participating in sports" },
  ];

  return (
    <section className="mt-20 lg:mt-30 ">
      <h2 className="text-center text-4xl font-semibold">
        Why Choose Dee Unique International Schools?
      </h2>

      <div className="grid lg:grid-cols-[3fr_2fr] items-stretch gap-x-16 mt-12">
        {/* Image Grid Section */}
        <div className="h-full">
          <div className="grid grid-cols-2 gap-4 h-full">
            {images.map(({ src, alt }, i) => (
              <div key={i} className="relative w-full h-[200px] lg:h-full">
                <Image
                  src={src}
                  fill
                  priority
                  quality={100}
                  className="object-cover rounded-lg"
                  alt={alt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center h-full space-y-10 max-w-[500px] text-center lg:text-left">
          <p className="text-lg lg:text-xl font-medium leading-relaxed lg:text-center text-left mt-4 lg:mt-0">
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
