import { TopCard } from "@/components/sharedcomponent/TopCard";
import React from "react";

const page = () => {
  return (
    <div className="">
      <TopCard
        title="Once a Dee Unique Student, Always a Member of the Family."
        text="The Dee Unique Alumni Association is a thriving community of graduates, united to stay connected, give back, and shape the future where memories are celebrated and opportunities are born."
        image="/GradCap.png"
        button="Join Alumni Association"
      />
    </div>
  );
};

export default page;
