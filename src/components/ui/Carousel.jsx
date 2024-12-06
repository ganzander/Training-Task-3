import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Carousel({ stories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    setSlidesToShow(window.innerWidth >= 768 ? 2 : 1);
  }, [window.innerWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow < 0
        ? stories.length - slidesToShow
        : prevIndex - slidesToShow
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 sm:mb-8 ">
        <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-medium">
          Success Stories
        </h2>
        <div className="hidden sm:flex items-center gap-4 ">
          <h2 className="text-[15px] sm:text-[20px] md:text-[20px] font-normal">
            Read All Stories
          </h2>
          <div className="bg-blue-700 p-1" size={20}>
            <ChevronRight />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-2 sm:mb-5">
        <div className="flex overflow-hidden space-x-4">
          {stories
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 p-2 rounded-lg"
              >
                <p className="text-white font-light text-[15px] md:text-[20px] lg:text-[25px] text-left">
                  {story.date}
                </p>
                <h3 className="text-white font-normal text-[20px] md:text-[25px] lg:text-[35px] text-left">
                  {story.title}
                </h3>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-end items-center gap-4 me-2 sm:me-10">
        <button className="text-white bg-[#303030] p-2" onClick={handlePrev}>
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button className="text-white bg-[#303030] p-2" onClick={handleNext}>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
