import Image from "next/image";

const AcademicCalendar = () => {
  const cardDetails = [
    {
      image: "/FocusStudents.webp",
      title: "Term Start & End Dates",
      body: "Plan ahead for each academic session.",
    },
    {
      image: "/StudentsandTeacher.webp",
      title: "Holiday Periods & Breaks",
      body: "Information on school closures and vacation times.",
    },
    {
      image: "/StudentTradefairweek.png",
      title: "Special School Events",
      body: "Science fairs, cultural week, and leadership training.",
    },
  ];

  return (
    <section className="mt-20 lg:mt-30 ">
      <h2 className="text-center text-4xl font-semibold mb-10">
        Academic Calendar & School Activities
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 place-items-center">
        {cardDetails.map(({ image, title, body }) => (
          <div
            key={title}
            className="w-full max-w-sm h-[320px] bg-[#FFFE0D80] rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={image}
                alt={title}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between text-[#1E1E1E]">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="font-medium text-lg">{body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-20 lg:mb-30">
        <button className="text-[#FFFFFF] bg-[#264B22] py-3 rounded-lg px-4">
          Download School Calendar
        </button>
      </div>
    </section>
  );
};

export default AcademicCalendar;
