"use client";
import React from "react";

interface TimelineItem {
  title: string;
  subtitle: string[];
}

interface TimeLineProps {
  title: string;
  items: TimelineItem[];
}

const TimeLine = ({ title, items }: TimeLineProps) => {
  const [lineHeights, setLineHeights] = React.useState<number[]>([]);
  const [titleWidth, setTitleWidth] = React.useState<number>(0);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  // Sample data for demonstration
  const sampleItems =
    items.length > 0
      ? items
      : [
          {
            title: "Phase 1: Planning",
            subtitle: [
              "Define project scope and objectives",
              "Conduct stakeholder analysis",
              "Create project timeline and milestones",
            ],
          },
          {
            title: "Phase 2: Development",
            subtitle: [
              "Set up development environment",
              "Implement core features",
              "Conduct regular code reviews",
            ],
          },
          {
            title: "Phase 3: Testing",
            subtitle: [
              "Unit testing and integration testing",
              "User acceptance testing",
              "Performance optimization",
            ],
          },
          {
            title: "Phase 4: Deployment",
            subtitle: [
              "Production environment setup",
              "Go-live and monitoring",
              "Post-launch support",
            ],
          },
        ];

  React.useEffect(() => {
    const calculateLineHeights = () => {
      const heights = itemRefs.current.map((ref, index) => {
        if (!ref || index === sampleItems.length - 1) return 0;

        const currentRect = ref.getBoundingClientRect();
        const nextRef = itemRefs.current[index + 1];
        if (!nextRef) return 0;

        const nextRect = nextRef.getBoundingClientRect();

        // Calculate center-to-center distance
        const currentCenterY = currentRect.top + 16; // 16 = half of circle (32px)
        const nextCenterY = nextRect.top + 16;

        return nextCenterY - currentCenterY;
      });

      setLineHeights(heights);
    };

    const measureTitleWidth = () => {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth);
      }
    };

    const handleResize = () => {
      calculateLineHeights();
      measureTitleWidth();
    };

    // Initial calculation
    calculateLineHeights();
    measureTitleWidth();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [sampleItems.length, title]);

  return (
    <div className="w-[80%] bg-[#FFFE0D80] mx-auto p-8 rounded-lg">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-2xl font-bold mb-6 text-center text-[#264B22]"
        >
          {title || "Project Timeline"}
        </h2>

        {/* Timeline */}
        <div
          className="relative flex flex-col items-center"
          style={{
            maxWidth: titleWidth > 0 ? `${titleWidth}px` : "none",
            width: titleWidth > 0 ? `${titleWidth}px` : "auto",
          }}
        >
          {sampleItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative flex items-start mb-12 w-full last:mb-0"
            >
              {/* Circle with connecting line */}
              <div className="flex-shrink-0 w-8 h-8 border-2 border-[#264B22] rounded-full z-10 flex items-center justify-center relative">
                <div className="w-3 h-3 bg-[#264B22] rounded-full" />

                {/* Connecting line */}
                {index < sampleItems.length - 1 && lineHeights[index] > 0 && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-px border-l-2 border-dashed border-[#264B22] z-0"
                    style={{ height: `${lineHeights[index]}px` }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="ml-4 flex-1 break-words">
                <h3 className="font-medium text-xl mb-3 text-[#1E1E1E] break-words">
                  {item.title}
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-base font-medium text-[#1E1E1E]">
                  {item.subtitle.map((line, i) => (
                    <li key={i} className="leading-relaxed break-words">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
