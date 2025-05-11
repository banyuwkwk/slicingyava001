"use client";

import Image from "next/image";
import { useState } from "react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/slider/IMG_1.jpg",
    title: "YAVA Ball",
    description: "Main Design",
    category: "Visual"
  },
  {
    id: 2,
    image: "/slider/IMG_2.jpg",
    title: "Electron Metaphysical Unit",
    description: "Layers",
    category: "Graphical"
  },
  {
    id: 3,
    image: "/slider/IMG_3.jpg",
    title: "Product Catalogue Deakage",
    description: "Electron Desktop/Product Details",
    category: "Graphical"
  },
];

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNext = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[activeSlideIndex];
  const previousSlide = slides[(activeSlideIndex - 1 + slides.length) % slides.length];
  const nextSlide = slides[(activeSlideIndex + 1) % slides.length];

  return (
    <section className="bg-white py-10 px-4">
      {/* Header with category and title */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          {currentSlide.category}
        </h3>
        <h2 className="text-2xl font-bold text-gray-900 mt-1">
          {currentSlide.title}
        </h2>
      </div>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation buttons - vertical on desktop */}
        <div className="flex lg:flex-col justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <Image 
              src="/icons/arrow-left.png" 
              alt="Previous" 
              width={20} 
              height={20}
            />
          </button>
          
          <span className="text-sm text-gray-500">
            {activeSlideIndex + 1}/{slides.length}
          </span>
          
          <button
            onClick={handleNext}
            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <Image 
              src="/icons/arrow-right.png" 
              alt="Next" 
              width={20} 
              height={20}
            />
          </button>
        </div>

        {/* Main image */}
        <div className="flex-1 relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
          
          {/* Description overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-sm">{currentSlide.description}</p>
          </div>
        </div>

        {/* Side content - appears to be a list in the screenshot */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-gray-50 p-4 rounded-lg h-full">
            <h3 className="font-medium text-gray-900 mb-3">Layers</h3>
            <ul className="space-y-2">
              {slides.map((slide, index) => (
                <li 
                  key={slide.id} 
                  className={`text-sm p-2 rounded ${index === activeSlideIndex ? 'bg-gray-200 font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveSlideIndex(index)}
                >
                  {slide.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}