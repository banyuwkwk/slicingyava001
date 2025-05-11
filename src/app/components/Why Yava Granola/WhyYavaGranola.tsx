"use client";

import Image from "next/image";

export default function WhyYavaGranola() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-10 bg-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WHY <span className="text-red-600">YAVA GRANOLA</span>
        </h1>
        <p className="font-medium text-gray-800 mb-2">Delicious • Convenient • Healthy</p>
        <p className="text-gray-700 mb-4">
          YAVA granola features the traditional rolled oats, combined with a Bali-centric combination of puffed red rice, cashews and various dried fruits (even chocolate). Mixed and baked until perfectly crunchy.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          Learn More
        </button>
      </div>

      <div className="md:w-1/2 relative flex items-center justify-center h-[600px]">
        <div className="relative w-full max-w-md mx-auto">
          {/* Spinner Bowl - Centered Base Image */}
          <Image
            src="/whyimage/Bowl Spin.png"
            alt="Granola Bowl"
            width={500}
            height={500}
            className="w-full h-auto animate-spin-slow object-cover object-center"
          />

          {/* Highlight 2 - Di kanan bawah bowl */}
          <Image
            src="/whyimage/Highlight.png"
            alt="Highlight 1"
            width={150}
            height={100}
            className="absolute bottom-[50%] right-[-20%] w-[30%] max-w-[150px] h-auto"
          />

          {/* Highlight 1 - Di kiri atas bowl */}
          <Image
            src="/whyimage/Highlight (1).png"
            alt="Highlight"
            width={150}
            height={100}
            className="absolute top-[45%] left-[-15%] w-[30%] max-w-[150px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}