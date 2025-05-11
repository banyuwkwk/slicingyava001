"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function LontarSugar() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={inViewRef}
      className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-10 bg-[#fff5e9]"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          LONTAR <span className="text-red-600">SUGAR</span>
        </h1>
        <p className="font-medium text-gray-800 mb-2">Pure • Natural • Sustainable</p>
        <p className="text-gray-700 mb-4">
          Lontar Sugar gives you more steady blood sugar and helps keep you more healthy (and taste great!)
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          Learn More
        </button>
      </div>

      <div className="md:w-1/2 relative flex items-center justify-center">
        <div className="relative w-full max-w-md mx-auto h-auto">
          {/* Gambar Utama - Lontar Gula */}
          <Image
            src="/lontarimage/Photo LG.png"
            alt="Lontar Gula"
            width={600}
            height={400}
            className={`w-[120%] h-auto object-contain ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          />

          {/* Sharp Red - Di kanan atas gambar utama */}
          <Image
            src="/lontarimage/Sharp Red.png"
            alt="Sharp Red"
            width={100}
            height={100}
            className={`absolute top-[-10%] right-[-10%] w-[25%] ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          />

          {/* Lontar - Di kiri atas gambar utama */}
          <Image
            src="/lontarimage/Lontar.png"
            alt="Lontar"
            width={150}
            height={100}
            className={`absolute top-[-15%] left-[-10%] w-[40%] ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          />

          {/* Maskot - Di kiri bawah gambar utama */}
          <Image
            src="/lontarimage/Mascot Container.png"
            alt="Maskot"
            width={200}
            height={150}
            className={`absolute bottom-[-20%] left-[-40%] w-[70%] ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          />

          {/* Gula Ramah - Di kanan bawah gambar utama */}
          <Image
            src="/lontarimage/Gula Ramah.png"
            alt="Gula Ramah"
            width={250}
            height={200}
            className={`absolute bottom-[-50%] right-[-25%] w-[70%] ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .animate-spin-slow:hover {
          animation-play-state: paused;
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right,
        .animate-slide-in-left {
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease forwards;
        }
      `}</style>
    </section>
  );
}