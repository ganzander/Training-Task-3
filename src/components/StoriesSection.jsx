import React from "react";
import Carousel from "./ui/Carousel";

const stories = [
  {
    date: "2024 March 17",
    title:
      "Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development",
  },
  {
    date: "2024 March 17",
    title:
      "Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Applications",
  },
  {
    date: "2024 March 18",
    title: "Optimizing Database Systems: Case Study on MongoDB Indexing",
  },
  {
    date: "2024 March 18",
    title: "AI-driven Solutions for E-commerce Personalization",
  },
];

export default function StoriesSection() {
  return (
    <section className="flex items-center justify-center px-8 pb-20 min-h-[50vh]">
      <div className="w-full">
        <Carousel stories={stories} />
      </div>
    </section>
  );
}
