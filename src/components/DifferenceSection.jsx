import React from "react";

const difference = [
  {
    name: "Consistency",
    logo: "/consistency.png",
  },
  {
    name: "Improvement",
    logo: "/improvement.png",
  },
  {
    name: "Branching",
    logo: "/branching.png",
  },
  {
    name: "Expertise",
    logo: "/expertise.png",
  },
  {
    name: "Security",
    logo: "/security.png",
  },
  {
    name: "Transparency",
    logo: "/transparency.png",
  },
];

export default function DifferenceSection() {
  return (
    <section className="px-8 pb-20 flex flex-col justify-center items-center min-h-[50vh]">
      <h2 className="capitalize text-[30px] sm:text-[40px] md:text-[50px] text-center mb-5 sm:mb-10">
        What makes us different?
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 sm:gap-y-16 md:gap-y-8 gap-x-4 sm:gap-x-4 md:gap-x-8">
        {difference.map((diff, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-normal"
          >
            <img
              src={diff.logo}
              alt={diff.name}
              className="md:w-20 md:h-20 h-12 w-12 mb-5"
            />
            <h3 className="text-[10px] sm:text-[15px] md:text-[20px] capitalize">
              {diff.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
