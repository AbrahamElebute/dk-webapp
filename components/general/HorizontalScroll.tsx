import React, { useEffect, useRef } from "react";
import SectionContainer from "../layouts/SectionContainer";
import OurProcess from "../pages/home/OurProcess";
import { EngagementIcon, PhoneIcon, ProgressIcon } from "@/assets/icons";

const HorizontalScrollSection: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const stickyParentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && stickyParentRef.current) {
        const sticky = stickyRef.current;
        const stickyParent = stickyParentRef.current;

        const { scrollWidth } = sticky;
        const verticalScrollHeight =
          stickyParent.getBoundingClientRect().height - sticky.offsetHeight;

        const stickyTopPosition = sticky.getBoundingClientRect().top;

        // If the sticky element hasn't entered the view, exit
        if (stickyTopPosition > 1) {
          return;
        }

        // Calculate the horizontal scroll position based on vertical scroll
        const scrolledDistance = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft =
          (scrollWidth / verticalScrollHeight) * -scrolledDistance * 0.85;
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const steps = [
    {
      step: "1",
      icon: <PhoneIcon />,
      body: "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
    },
    {
      step: "2",
      icon: <ProgressIcon />,
      body: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.",
    },
    {
      step: "3",
      icon: <EngagementIcon />,
      body: "Once we’ve agreed on milestones, we’ll immediately get to work. We’ll track progress, report updates, and continuously adapt to your needs.",
    },
  ];

  return (
    <SectionContainer>
      <div className="text-center">
        <h2 className="text-3xl">Our Process: Simple, Seamless, Streamlined</h2>
        <p className="text-base">
          Partnering with us is a seamless and rewarding experience.
        </p>
      </div>

      <div className="h-full md:h-[2180px]" ref={stickyParentRef}>
        <div
          className="w-full mt-0 md:mt-6 md:sticky md:top-0 md:max-h-screen md:overflow-hidden"
          ref={stickyRef}
        >
          <div className="flex gap-5 flex-col md:flex-row items-center md:gap-10">
            {steps.map((stepData, index) => (
              <OurProcess
                key={index}
                step={stepData.step}
                icon={stepData.icon}
                body={stepData.body}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HorizontalScrollSection;
