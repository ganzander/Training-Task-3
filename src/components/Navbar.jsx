import React, { useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 relative">
      <div className="text-xl font-bold">
        <img
          src="/blackcoffer.png"
          alt="Blackcoffer"
          className="w-24 sm:w-32"
        />
      </div>

      <div className="flex items-center space-x-6 md:hidden">
        {!isMenuOpen && (
          <Menu
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full shadow-md ${
          isMenuOpen ? "block backdrop-blur-sm bg-black/80" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-end">
            <X
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between w-full gap-0 lg:gap-2 hover:text-gray-400">
              <a href="#">Who we are</a>
              <ChevronDown />
            </div>
            <div className="flex items-center justify-between gap-0 lg:gap-2 hover:text-gray-400">
              <a href="#">What we do</a>
              <ChevronDown />
            </div>
            <div className="flex items-center justify-between gap-0 lg:gap-2 hover:text-gray-400">
              <a href="#">Insights</a>
              <ChevronDown />
            </div>
            <div className="flex items-center justify-between gap-0 lg:gap-2 hover:text-gray-400">
              <a href="#">Careers</a>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center gap-0 lg:gap-2 hover:text-gray-400">
          <a href="#">Who we are</a>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-0 lg:gap-2 hover:text-gray-400">
          <a href="#">What we do</a>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-0 lg:gap-2 hover:text-gray-400">
          <a href="#">Insights</a>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-0 lg:gap-2 hover:text-gray-400">
          <a href="#">Careers</a>
          <ChevronDown />
        </div>
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8">
        <Search />
        <div
          className="border border-solid p-[5px] bg-[#FFFFFF1A]"
          style={{
            borderWidth: "0.5px",
            borderImageSource:
              "radial-gradient(92.83% 92.83% at 5.66% 90.23%, #AEAEAE 0%, rgba(0, 0, 0, 0) 100%)",
            borderImageSlice: 1,
          }}
        >
          <button
            className="bg-[#FFFFFF1A] p-[5px] border-solid flex justify-center items-center gap-[10px]"
            style={{
              borderWidth: "0.5px",
              borderColor: "#7A7A7A",
            }}
          >
            <Phone />
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
