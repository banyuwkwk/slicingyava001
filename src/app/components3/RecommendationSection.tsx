// src/app/components/RecommendationSection.tsx
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface RecommendationSectionProps {
  currentProductId?: string; // ID produk saat ini (string), opsional
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ currentProductId }) => {
  // Daftar produk statis, atau ambil dari API sesuai kebutuhan
  const allProducts: Product[] = [
    { id: 1, name: 'GO`NOLA Chocolate Vanilla', category: 'Granola', image: '/product/GranolaVanilla.png' },
    { id: 2, name: 'Granola Puffs Chocolate Vanila', category: 'Granola', image: '/product/GranolaPuffts.png' },
    { id: 3, name: 'Granola Chocolate Vanilla', category: 'Granola', image: '/product/GranolaChocolate.png' },
    { id: 4, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaCocolateBanana.png' },
    { id: 5, name: 'Granola Coconut Banana', category: 'Granola', image: '/product/GranolaCoconutBanana.png' },
  ];

  // Filter produk: jangan tampilkan produk yang sedang dibuka
  const filteredProducts = allProducts.filter(product => String(product.id) !== currentProductId);

  // Ref dan state untuk scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    if (containerRef.current) {
      const newScroll = Math.max(scrollPosition - 400, 0);
      setScrollPosition(newScroll);
      containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    if (containerRef.current) {
      const newScroll = scrollPosition + 400;
      setScrollPosition(newScroll);
      containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1">
            <h2 className="text-2xl md:text-4xl text-[#4B1A1B] font-bold font-wildwords-lower-bold mt-1">
              OUR
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#FEB519] via-[#FE8301] to-[#F31212] bg-clip-text text-transparent font-wildwords-lower-bold">
              RECOMMENDATION
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handleLeftClick}
              className="bg-white p-2 rounded-full shadow-md"
            >
              <Image
                src="/icons/kiri.png" // Replace with your left arrow PNG icon
                alt="Previous"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
            <button
              onClick={handleRightClick}
              className="bg-white p-2 rounded-full shadow-md"
            >
              <Image
                src="/icons/kanan.png" // Replace with your right arrow PNG icon
                alt="Next"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Recommendation Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap transition-transform duration-300"
          style={{ scrollBehavior: "smooth" }}
        >
          {filteredProducts.map((product) => (
            <Link href={`/product-detail/${product.id}`} key={product.id}>
              <div
                className="group relative bg-white rounded-lg overflow-hidden shadow-md mr-4 inline-block min-w-[200px]"
                style={{ width: "200px", height: "300px" }} // Adjust card size
              >
                {/* Gradient animasi overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </div>
                {/* Gambar produk */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Nama produk */}
                <div className="relative z-20 p-4 text-center">
                  {/* Split product name into two lines */}
                  <p className="text-black font-medium text-sm md:text-base mb-1 transition-colors duration-300 group-hover:text-white">
                    {product.name.split(' ')[0]} {/* Display the first part of the name */}
                  </p>
                  <p className="text-black font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                    {product.name.split(' ').slice(1).join(' ')} {/* Display the rest of the name */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;