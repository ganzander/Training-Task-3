import React from "react";

export default function CallBackSection() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-4 border-b-[1px] border-t-[1px] border-b-[#7A7A7A] border-t-[#7A7A7A]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-[25px] sm:text-[30px] md:text-[35px] font-bold tracking-wide">
          REQUEST A CALL BACK
        </h2>

        <h3 className="text-[20px] tracking-tighter sm:tracking-normal sm:text-[25px] md:text-[30px]">
          Get your Business Right up There
        </h3>

        <p className="text-gray-300 max-w-2xl mx-auto text-[12px] sm:text-[15px] md:text-[20px]">
          When you need intelligent answers to your toughest questions, we’re
          here to help. We’re just a call or email away! Don’t hang back from
          getting in touch with us. We’ll be glad to assist you.
        </p>

        <button className="bg-[#444444] border-[1px] border-[#7A7A7A] transition-colors px-[10px] py-[10px] text-white">
          Request a Call Back
        </button>
      </div>
    </section>
  );
}
