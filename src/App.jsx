import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <ServiceSection />
      <FeatureSection />
    </div>
  );
};

export default App;
