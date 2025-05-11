"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Smooth Fasting & Stable Blood Sugar",
    subtitle: "Follow This Eating Pattern for Suhoor & Ittar!",
    image: "/articleimage/IMG 1.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Positive Thinking for a Healthier Heart",
    image: "/articleimage/News Card 2.png",
    isFeatured: true
  },
  {
    id: 3,
    title: "Normal Blood Sugar: Why It Matters",
    image: "/articleimage/News Card 3.png",
    isFeatured: true
  },
  {
    id: 4,
    image: "/articleimage/News Card 4.png"
  },
  {
    id: 5,
    image: "/articleimage/News Card 5.png"
  },
  {
    id: 6,
    image: "/articleimage/News Card 6.png"
  }
];

export default function ArticleGallery() {
  const featuredArticles = articles.filter(article => article.isFeatured);
  const regularArticles = articles.filter(article => !article.isFeatured);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Title Image Above Slider */}
      <div className="relative w-full mb-6">
        <div className="relative w-full h-24 md:h-32">
          <Image
            src="/articleimage/TitleImage.png" // Add your title image path here
            alt="Article Gallery Title"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Featured Article Slider */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="relative w-full aspect-[16/9] max-h-[60vh]">
          <Image
            src={featuredArticles[currentSlide].image}
            alt="Featured article"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {featuredArticles[currentSlide].title}
              </h2>
              {featuredArticles[currentSlide].subtitle && (
                <p className="text-lg opacity-90">
                  {featuredArticles[currentSlide].subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-20 left-6 flex space-x-2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Regular Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {regularArticles.map((article) => (
          <div key={article.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full aspect-[4/3] max-h-[180px]">
              <Image
                src={article.image}
                alt="Article image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <Link
          href="/articles"
          className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
        >
          See More Articles
        </Link>
      </div>
    </div>
  );
}