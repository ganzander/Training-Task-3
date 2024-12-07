import React from "react";

export default function FeatureSection() {
  return (
    <section className="px-8 pb-20 w-full">
      <h2 className="text-[12px] sm:text-[20px] md:text-[30px] text-gray-600 mb-2 sm:mb-5">
        The reason why Blackcoffer stands out
      </h2>
      <h2 className="text-[20px] sm:text-[30px] md:text-[40px] font-semibold ">
        Blackcoffer Unfolds Solutions To Everything{" "}
      </h2>

      <div className="flex justify-center items-center w-full sm:w-[90%] lg:w-[80%] mx-0 sm:mx-auto sm:p-6 p-0 pt-5">
        <div className="bg-black/95 rounded-tl-[40px] rounded-br-[40px]  rounded-bl-[40px] overflow-hidden grid grid-cols-3 sm:grid-cols-5 border border-solid border-[#2C2C2C]">
          {/* Top Row */}

          {/* 1st column */}
          <div className="lg:p-8 sm:p-4 p-2 col-span-1 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                12+
              </h3>
              <p className="text-gray-300 text-xs sm:text-md lg:text-lg">
                Years of Experience
              </p>
            </div>
          </div>

          {/* 2nd column */}
          <div className="lg:p-8 sm:p-4 p-2 col-span-1 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg  font-bold text-white">
                100+
              </h3>
              <p className="text-gray-300 text-xs sm:text-md lg:text-lg">
                Clients
              </p>
            </div>
          </div>

          {/* 3rd column */}
          <div className="lg:p-8 sm:p-4 p-2 col-span-1 sm:col-span-2 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                97%
              </h3>
              <p className="text-gray-300 text-xs sm:text-md lg:text-lg">
                Client Retention Rate
              </p>
            </div>
          </div>

          {/* 4th row */}
          <div
            className="p-8 hidden sm:flex  row-span-3 col-span-1 bg-cover bg-center border border-solid border-[#2C2C2C]"
            style={{ backgroundImage: "url('/feature-section-1.png')" }}
          >
            <div
              className="space-y-2 bg-cover bg-center"
              style={{ backgroundImage: "url('/feature-section-1.png')" }}
            ></div>
          </div>

          {/* Middle Row */}
          <div
            className="lg:p-8 sm:p-4 p-2 col-span-1 sm:col-span-2 relative overflow-hidden border border-gray-800 bg-center bg-cover"
            style={{
              backgroundImage: "url('/feature-section-2.png')",
            }}
          >
            <div className="relative z-10 space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                40+
              </h3>
              <p className="text-gray-100 text-xs sm:text-md lg:text-lg">
                AI solutions
              </p>
            </div>
          </div>

          <div className="lg:p-8 sm:p-4 p-2 col-span-1 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                350+
              </h3>
              <p className="text-gray-300 text-xs sm:text-md lg:text-lg">
                Employees
              </p>
            </div>
          </div>

          <div className="lg:p-8 sm:p-4 p-2 col-span-1 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                2+
              </h3>
              <p className="text-gray-300 text-xs sm:text-md lg:text-lg">
                Countries
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="lg:p-8 sm:p-4 p-2 col-span-1 sm:col-span-2 bg-black/90 border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <h3 className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
                80+
              </h3>
              <p className="text-gray-300  text-xs sm:text-md lg:text-lg">
                Big Data Solutions
              </p>
            </div>
          </div>

          <div className="lg:p-8 sm:p-4 p-2 col-span-2 bg-black/90  flex items-center border border-solid border-[#2C2C2C]">
            <div className="space-y-2">
              <p className="text-gray-400 lg:text-4xl md:text-2xl text-lg">
                Dedicated to
              </p>
              <h3 className="text-xs sm:text-md lg:text-lg font-semibold text-white">
                Providing Top-Notch Big Data Analytics & BI Services
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
