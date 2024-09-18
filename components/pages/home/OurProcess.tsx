import Link from "next/link";
import React, { ReactNode } from "react";

interface ourProcessProps {
  step: string;
  icon: ReactNode;
  body: string;
}

const OurProcess: React.FC<ourProcessProps> = ({ step, icon, body }) => {
  return (
    <div className="flex space-x-6 w-full  md:mt-32 items-center">
      <div
        key=""
        className="flex-shrink-0 w-full md:w-[700px] md:h-[350px] bg-gray p-6 rounded-lg"
      >
        <p className="hidden md:block text-8xl uppercase font-bold text-right  text-[#687580] mix-blend-color-dodge">
          step {step}
        </p>
        <div className="flex-col gap-2 flex">
          <div className="flex items-center mt-20 gap-3">
            <h2 className="text-2xl">Step{step}</h2>
            <h2 className="">{icon}</h2>
          </div>
          <p>{body}</p>
          {step === "3" ? (
            <Link href={""} className="text-primary">
              {" "}
              Schedule a Call
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
