import React from "react";
import InfoCard from "../sharedcomponent/InfoCard";
const cardData = [
  {
    title: "Nursery & Primary School (Lagos Campus)",
    text: "Our early learning program nurtures young minds with:",
    images: ["/Whoweare1.png", "/Whoweare2.png", "/Whoweare3.png"],
    listItems: [
      "Play-based learning that fosters creativity and curiosity.",
      "Strong literacy and numeracy foundation for lifelong learning.",
      "Character development through responsibility and respect.",
    ],
  },
  {
    title: "Secondary School (Lagos - Day & Ogun - Day & Boarding)",
    text: "We prepare students for excellence in WAEC, IGCSE, and global opportunities. Our program includes:",
    images: ["/StudentInComputerRoom.png", "/StudentInLab.png", "/Musical.png"],
    listItems: [
      "STEM and digital literacy for future-ready skills.",
      "Personalized learning tailored to each student's needs.",
      "Structured boarding experience for focused academic growth.",
    ],
  },
];

const Programs = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-semibold">
        Our Academic Programs
      </h2>
      {cardData.map(({ title, images, text, listItems }, index) => (
        <InfoCard
          key={index}
          title={title}
          images={images}
          text={text}
          listItems={listItems}
        />
      ))}
    </div>
  );
};

export default Programs;
