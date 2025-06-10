import { TopCard } from "@/components/sharedcomponent/TopCard";
import TimeLine from "@/components/sharedcomponent/TimeLine";

const timelineData = [
  {
    title: "Purchase an Application Form",
    subtitle: [
      "Available at any Dee Unique campus or online via our admissions page.",
    ],
  },
  {
    title: "Entrance Examination",
    subtitle: [
      "Applicants will be tested in Mathematics, English, and General Knowledge.",
    ],
  },
  {
    title: "Interview & Assessment",
    subtitle: [
      "A friendly oral assessment for conducted after the exam to assess readiness and fit",
    ],
  },
  {
    title: "Submit Required Documents",
    subtitle: [
      "Two recent passport photographs",
      "Birth certificate",
      "Last school report (if applicable)",
    ],
  },
  {
    title: "Parent Interview & Campus Tour",
    subtitle: ["Meet our educators and explore the learning environment"],
  },
];

export default function DaySecondaryAbesanPage() {
  return (
    <div className="">
      <TopCard
        title="Apply to Dee Unique International Secondary Day School (Abesan, Lagos State)"
        text="At Dee Unique International Schools, we make enrollment simple and transparent. Follow the steps below to secure a place for your child."
        image="/SchoolBuilding.webp"
        button="Buy Application Form"
      />
      <TimeLine
        title="Secondary School Application Process"
        items={timelineData}
      />
    </div>
  );
}
