import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeatureSection from "./components/FeatureSection";
import DifferenceSection from "./components/DifferenceSection";
import StoriesSection from "./components/StoriesSection";
import CallBackSection from "./components/CallBackSection";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 z-20"
        style={{
          backgroundImage: "url('/bg-image.png')",
        }}
      ></div>
      <div
        className="w-full bg-cover bg-center pb-20"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>

      <ServiceSection />
      <FeatureSection />
      <DifferenceSection />
      <StoriesSection />
      <CallBackSection />
      <Footer />
    </div>
  );
};

export default App;
