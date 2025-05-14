"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GranolaProduct = ({ productId }: { productId: string }) => {
  const [selectedSize, setSelectedSize] = useState("400g");
  const [isFlipped, setIsFlipped] = useState(false);

  const productData = {
    name: "CHOCOLATE VANILLA",
    description:
      "When you start your day with chocolate from Sulawesi, vanilla, creamy cashew nuts and crunchy granola clusters only from YAVA – you won’t be able to resist SmileAllDay!",
    sizes: ["400g", "200g", "90g"],
    sizeIcons: {
      "400g": "/icons/400g.png",
      "200g": "/icons/200g.png",
      "90g": "/icons/90g.png",
    },
    images: {
      front: {
        "400g": "/product/depan400gr.png",
        "200g": "/product/depan200gr.png",
        "90g": "/product/depan90gr.png",
      },
      back: {
        "400g": "/product/belakang.png",
        "200g": "/product/belakang.png",
        "90g": "/product/belakang.png",
      },
    },
    icons: ["/icons/bre.png", "/icons/snk.png"],
    ingredients: [
      "Cashews",
      "Cocoa from Sulawesi",
      "Lontar Sugar",
      "Source of Dietary Fiber",
      "Contains 53mg Inulin/serving",
    ],
    shareIcons: [
      "/icons/share-twitter.png",
      "/icons/share-facebook.png",
      "/icons/gmail.png",
    ],
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container mx-auto px-4 max-w-screen-xl bg-[#F9F5F0] py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="#" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>/</li>
          <li>Our Foods</li>
        </ol>
      </nav>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left */}
        <div className="md:col-span-4">
          <p className="text-2xl text-[#4B1A1B] font-bold font-wildwords-lower-bold mt-1">
            GRANOLA
          </p>
          <div className="mt-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FEB519] via-[#FE8301] to-[#F31212] bg-clip-text text-transparent font-wildwords-lower-bold">
              CHOCOLATE
            </h1>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FEB519] via-[#FE8301] to-[#F31212] bg-clip-text text-transparent font-wildwords-lower-bold">
              VANILLA
            </h2>
          </div>

          {/* Size Icon Buttons */}
          <div className="flex gap-3 mt-6">
            {productData.sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setIsFlipped(false);
                }}
                className={`p-1 rounded-full border-2 transition-all duration-300 ${
                  selectedSize === size
                    ? "border-orange-500"
                    : "border-gray-300"
                } hover:border-orange-500 hover:shadow-md`}
              >
                <Image
                  src={productData.sizeIcons[size]}
                  alt={`size-${size}`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="mt-6 text-sm leading-relaxed text-[#4B1A1B] indent-8">
            {productData.description}
          </p>

          {/* Icons */}
          <div className="flex gap-3 mt-6 items-center">
            {productData.icons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt={`icon-${index}`}
                width={40}
                height={40}
                className="object-contain"
              />
            ))}
          </div>

          {/* Buy Now Button */}
          <button className="mt-6 bg-[#F31212] hover:bg-red-700 text-white px-6 py-2 text-sm rounded-full shadow-md transition duration-300">
            BUY NOW
          </button>
        </div>

        {/* Middle Image */}
        <div className="md:col-span-4 flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src={
                isFlipped
                  ? productData.images.back[selectedSize]
                  : productData.images.front[selectedSize]
              }
              alt="Granola Product"
              width={360}
              height={360}
              className="object-contain transition-transform duration-700 ease-in-out"
            />
          </motion.div>

          {/* Flip Icon */}
          <div className="mt-4">
            <button onClick={handleFlip}>
              <Image
                src="/icons/putar.png"
                alt="Flip Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase mb-2 text-[#4B1A1B]">
            INGREDIENTS
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {productData.ingredients.map((item) => (
              <span
                key={item}
                className="bg-orange-200 text-orange-800 text-xs px-3 py-1 rounded-full hover:bg-orange-300 hover:shadow-md transition duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-[#4B1A1B]">
            Oats (39.5%), Palm Sugar (17.8%), Cashew Nuts (12.3%), Brown Rice
            (10.9%), Coconut Oil (8.1%), Cocoa Powder (2.1%), Sea Salt (1.2%),
            Cocoa Mass (0.3%), Sodium Hydrogen Carbonate Raising Agent (Baking
            Soda), Natural Vanilla Flavor, Vanilla Paste (0.01%). Contains
            allergens, see bold ingredients list. Manufactured on equipment that
            also processes sesame and peanuts.
            <br />
            <br />
            No Preservatives, No Synthetic Colors, No Flavor Enhancers.
          </p>

          {/* Share Icons */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-xs text-[#4B1A1B]">Share:</span>
            {productData.shareIcons.map((icon, index) => (
              <a key={index} href="#">
                <Image
                  src={icon}
                  alt={`share-${index}`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GranolaProduct;