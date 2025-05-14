// components/Page4Sect.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    src: '/images/ggb.png',
    alt: 'Slide 1',
    text: 'By purchasing evaporated lontar nectar (also known as "juru" or Lontar Sugar), YAVA creates a new source of income for low-income rural farmers.',
  },
  {
    src: '/images/ggb1.png',
    alt: 'Slide 2',
    text: 'Palm sugar is made by evaporating nectar from the lontar tree.',
  },
  {
    src: '/images/ggb2.png',
    alt: 'Slide 3',
    text: 'Lontar trees are commonly found in the dry regions of eastern Indonesia.',
  },
  {
    src: '/images/ggb3.png',
    alt: 'Slide 4',
    text: 'Small-scale farmers collect the nectar by climbing lontar trees. Lontar palm sugar is harvested from naturally grown trees.',
  },
];

const Page4Sect = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Variasi animasi untuk Framer Motion
  const slideVariants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    }),
  };

  const direction = (from: number, to: number) =>
    from < to ? 1 : -1;

  return (
    <div className="bg-[#f9f5e7] min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#8b4513] mb-10 leading-tight">
        WHERE & HOW<br />
        LONTAR SUGAR'S MADE
      </h1>

      {/* Slider Container */}
      <div className="relative w-full max-w-3xl h-[400px] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence custom={1}>
          <motion.div
            key={currentSlide}
            custom={1}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-between bg-white p-6"
          >
            {/* Gambar */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            {/* Teks */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6 text-gray-800 text-lg">
              {slides[currentSlide].text}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-red-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Page4Sect;