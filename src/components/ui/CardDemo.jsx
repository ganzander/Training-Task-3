"use client";
import { cn } from "../../lib/utils";

export default function CardDemo({ name, imgUrl }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-40 sm:h-80 md:h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex justify-between items-center p-4 bg-contain bg-no-repeat bg-center"
        )}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
      </div>
    </div>
  );
}
