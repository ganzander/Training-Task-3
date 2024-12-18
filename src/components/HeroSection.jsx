import React from "react";
import { ChevronRight } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-around px-8 lg:px-16 w-full min-h-[60vh]">
      <div className="flex flex-col w-[100%] md:w-[60%] tracking-wider pt-20">
        <h1 className="text-3xl sm:text-4xl text-center md:text-5xl lg:text-7xl font-bold mb-4">
          TOGETHER WE
        </h1>
        <h1 className="text-3xl sm:text-4xl text-center md:text-5xl lg:text-7xl font-bold ps-0 sm:ps-28 lg:ps-32">
          REINVENTED
        </h1>
      </div>

      <div className="w-[100%] md:w-[40%] flex flex-col items-start pt-5 ps-8">
        <div className="bg-blue-600 w-[80px] h-[9px] mb-1 md:mb-5 md:mt-2 hidden sm:flex"></div>
        <p className="pt-4 md:pt-8 sm:flex hidden text-white text-sm md:text-md lg:text-lg w-[80%] md:w-[100%] lg:w-[95%] mb-0 sm:mb-4  ">
          Together, we can reinvent your business. Reinvention is about breaking
          industry norms. Our wide range of capabilities, ecosystem
          partnerships, and unmatched industry expertise can help your business
          become the next best version of itself.
        </p>
        <div className="flex items-center text-sm md:text-md lg:text-lg w-[80%] md:w-[100%] lg:w-[75%] gap-4 z-30">
          <p className="text-white text-md md:text-lg lg:text-xl">
            See what we do
          </p>
          <div className="bg-blue-600 p-1">
            <ChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
