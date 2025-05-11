"use client";

import { useState } from "react";
import Image from "next/image";

// Types
type Product = {
  id: number;
  name: string;
  flavor: string;
  image: string;
  category: string;
};

// Data Produk
const products: Product[] = [
  {
    id: 1,
    name: "GO'NOLA",
    flavor: "Chocolate Vanilla",
    image: "/foodproduct/IMG.png",
    category: "Granola",
  },
  {
    id: 2,
    name: "GRANOLA PUFFS",
    flavor: "Chocolate Vanilla",
    image: "/foodproduct/IMG (1).png",
    category: "Puffs",
  },
  {
    id: 3,
    name: "GRANOLA BITES",
    flavor: "Chocolate Vanilla",
    image: "/foodproduct/IMG (2).png",
    category: "Bar",
  },
  {
    id: 4,
    name: "GRANOLA",
    flavor: "Chocolate Banana",
    image: "/foodproduct/IMG (3).png",
    category: "Granola",
  },
  {
    id: 5,
    name: "GRANOLA",
    flavor: "Chocolate Banana",
    image: "/foodproduct/IMG (4).png",
    category: "Granola",
  },
  {
    id: 6,
    name: "GRANOLA",
    flavor: "Chocolate Banana",
    image: "/foodproduct/IMG (5).png",
    category: "Granola",
  },
  {
    id: 7,
    name: "GRANOLA",
    flavor: "Chocolate Banana",
    image: "/foodproduct/IMG (6).png",
    category: "Granola",
  },
  {
    id: 8,
    name: "GRANOLA",
    flavor: "Chocolate Banana",
    image: "/foodproduct/IMG (7).png",
    category: "Granola",
  },
];

// Kategori Produk
const categories = [
  { name: "All Products", icon: "/foodproduct/Frame 1 (2).png" },
  { name: "Granola", icon: "/foodproduct/Frame 1 (3).png" },
  { name: "Biscuits", icon: "/foodproduct/Frame 1 (4).png" },
  { name: "Bar", icon: "/foodproduct/Frame 1 (5).png" },
  { name: "Popcorn", icon: "/foodproduct/Frame 1 (6).png" },
  { name: "Puffs", icon: "/foodproduct/Frame 1 (7).png" },
  { name: "Cashews", icon: "/foodproduct/Frame 1 (8).png" },
];

// Komponen ProductCard (masih dalam satu file)
const ProductCard = ({ product }: { product: Product }) => {
  // const isHighlighted = product.category === "Granola";

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-90`}></div>
      </div>

      {/* Gambar Produk */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-lg z-10">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.flavor}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Teks Produk */}
      <div className="relative z-20 p-4 text-center">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
          {product.name}
        </h3>
        <p className="text-gray-700 transition-colors duration-300 group-hover:text-white">
          {product.flavor}
        </p>
      </div>
    </div>
  );
};

// Komponen Utama
export default function ProductCardCase() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  // Filter produk berdasarkan kategori
  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

      return (
        <section className="bg-white min-h-screen py-20" style={{ backgroundColor: "#FDF5E6" }}>
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">OUR FOOD</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-red-600">FIND YOUR FAVORITE!</h2>
      
            {/* Kategori Produk */}
            <div className="flex justify-center flex-wrap gap-6 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`text-center focus:outline-none ${
                    activeCategory === category.name ? "font-bold text-red-600" : ""
                  }`}
                >
                  <div className="w-16 h-16 mx-auto relative">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2">{category.name}</p>
                </button>
              ))}
            </div>
      
            {/* Grid Produk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
              )}
            </div>
      
            {/* Tombol See More menuju all foods*/}
            <div className="mt-12 flex justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                See More
              </button>
            </div>
          </div>
        </section>
      );
}