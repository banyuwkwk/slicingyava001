// src/app/components/ProductList.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface ProductListProps {
  activeCategory: string;
}

const ProductList: React.FC<ProductListProps> = ({ activeCategory }) => {
  const storeIcons = ["blibli", "lazada", "shopee", "tiktokshop", "tokopediaa"];

  const products: Product[] = [
    { id: 1, name: 'GO`NOLA Chocolate Vanilla', category: 'Granola', image: '/product/GranolaVanilla.png' },
    { id: 2, name: 'Granola Puffs Chocolate Vanila', category: 'Granola', image: '/product/GranolaPuffts.png' },
    { id: 3, name: 'Granola Chocolate Vanilla', category: 'Granola', image: '/product/GranolaChocolate.png' },
    { id: 4, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaCocolateBanana.png' },
    { id: 5, name: 'Granola Coconut Banana', category: 'Granola', image: '/product/GranolaCoconutBanana.png' },
    { id: 6, name: 'Granola Rosella Cinnamon', category: 'Granola', image: '/product/GranolaRosella.png' },
    { id: 7, name: 'Granola Tropical Fruits', category: 'Granola', image: '/product/GranolaTropicalFruits.png' },
    { id: 8, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaPuffsChocolateVanila.png' },
    { id: 9, name: 'Popcorn Sea Salt Caramel', category: 'Popcorn', image: '/product/PopcornSeaSaltCaramel.png' },
    { id: 10, name: 'Popcorn Chocolate Peanut', category: 'Popcorn', image: '/product/PopcornChocolatePeanut.png' },
    { id: 11, name: 'Popcorn Cheeze Flavor', category: 'Popcorn', image: '/product/PopcornCheezeFlavor.png' },
    { id: 12, name: 'Krispi Puffs Caocao', category: 'Puffs', image: '/product/KrispiPuffsCaocao.png' },
    { id: 13, name: 'Krispi Sweet Cashews', category: 'Puffs', image: '/product/KrispiSweetCashews.png' },
    { id: 14, name: 'Krispi Sweet & Spicy Balado', category: 'Puffs', image: '/product/KrispiSweet&SpicyBalado.png' },
    { id: 15, name: 'Wild Harvested Cashews Caocao Cashews', category: 'Cashews', image: '/product/CaocaoCashews.png' },
    { id: 16, name: 'Wild Harvested Cashews Chlili Limes', category: 'Cashews', image: '/product/ChliliLimes.png' },
    { id: 17, name: 'Wild Harvested Cashews Roasted', category: 'Cashews', image: '/product/Roasted.png' },
    { id: 18, name: 'Wild Harvested Cashews Raw', category: 'Cashews', image: '/product/Raw.png' },
    { id: 19, name: 'Wild Harvested Cashews Roasted Pieces', category: 'Cashews', image: '/product/RoastedPieces.png' },
    { id: 20, name: 'Wild Harvested Cashews Sweet & Spicy', category: 'Cashews', image: '/product/Sweet&Spicy.png' },
  ];

  // Filter produk jika kategori bukan "All Products"
  let filteredProducts: Product[];
  if (activeCategory !== "All Products") {
    filteredProducts = products.filter(p => p.category === activeCategory);
    return (
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">{activeCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isClickable = product.id === 3;

              const productCard = (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Nama produk */}
                  <div className="relative z-20 p-4 text-center">
                    <p className="text-black font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-white"
                       style={{ fontFamily: `'Poppins', sans-serif` }}>
                      {product.name}
                    </p>
                  </div>
                </div>
              );

              return isClickable ? (
                <Link href={`/product-detail/${product.id}`} key={product.id}>
                  {productCard}
                </Link>
              ) : (
                productCard
              );
            })}
          </div>

          {/* Teks dan ikon toko di bawah semua produk */}
          <div className="mt-10 text-center">
            <h2
              style={{
                fontFamily: "'WildWords', cursive",
                fontSize: '2.25rem',
                lineHeight: '2.5rem',
                marginBottom: '2rem',
                fontWeight: 'bold',
              }}
              className="text-center"
            >
              <span style={{ color: '#4B1A1B' }} className="block">AVAILABLE</span>
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FE8301, #FEB519, #F31212)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                }}
              >
                IN YOUR FAVORITE STORE
              </span>
            </h2>
            <div className="flex justify-center gap-6 mt-6">
              {storeIcons.map((icon) => (
                <a
                  key={icon}
                  href={`https://${icon}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FE8301] transition-colors"
                >
                  <Image
                    src={`/images/${icon}.png`}
                    alt={icon}
                    width={32}
                    height={32}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Jika kategori adalah "All Products", kelompokkan per kategori
  const groupedProducts: Record<string, Product[]> = {};
  products.forEach(product => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  const categories = Object.keys(groupedProducts);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">All Products</h2>
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-black">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedProducts[category].map((product) => {
                const isClickable = product.id === 3;

                const productCard = (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Nama produk */}
                    <div className="relative z-20 p-4 text-center">
                      <p className="text-black font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-white"
                         style={{ fontFamily: `'Poppins', sans-serif` }}>
                        {product.name}
                      </p>
                    </div>
                  </div>
                );

                return isClickable ? (
                  <Link href={`/product-detail/${product.id}`} key={product.id}>
                    {productCard}
                  </Link>
                ) : (
                  productCard
                );
              })}
            </div>
          </div>
        ))}

        {/* Teks dan ikon*/}
        <div className="mt-10 text-center">
          <h2
            style={{
              fontFamily: "'WildWords', cursive",
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginBottom: '2rem',
              fontWeight: 'bold',
            }}
            className="text-center"
          >
            <span style={{ color: '#4B1A1B' }} className="block">AVAILABLE</span>
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #FE8301, #FEB519, #F31212)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
              }}
            >
              IN YOUR FAVORITE STORE
            </span>
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            {storeIcons.map((icon) => (
              <a
                key={icon}
                href={`https://${icon}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FE8301] transition-colors"
              >
                <Image
                  src={`/images/${icon}.png`}
                  alt={icon}
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;