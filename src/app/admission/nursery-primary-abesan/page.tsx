import TimeLine from "@/components/sharedcomponent/TimeLine";
import { TopCard } from "@/components/sharedcomponent/TopCard";

const timelineData = [
  {
    title: "Purchase an Application Form",
    subtitle: [
      "Available at any Dee Unique campus or online via our admissions page.",
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
    title: "Interview & Assessment",
    subtitle: [
      "A friendly oral assessment for Nursery",
      "Basic written and oral assessments for Primary applicants",
    ],
  },
  {
    title: "Parent Interview & Campus Tour",
    subtitle: ["Meet our educators and explore the learning environment"],
  },
];

export default function NurseryPrimaryAbesanPage() {
  return (
    <div className="space-y-12">
      {" "}
      {/* Adds controlled vertical spacing */}
      <TopCard
        title="Apply to Dee Unique International Nursery & Primary School (Abesan, Lagos State)"
        text="At Dee Unique International Schools, we make enrollment simple and transparent. Follow the steps below to secure a place for your child."
        image="/SchoolBuilding.webp"
        button="Buy Application Form"
      />
      <TimeLine
        title="Nursery & Primary Application Process"
        items={timelineData}
      />
    </div>
  );
}
