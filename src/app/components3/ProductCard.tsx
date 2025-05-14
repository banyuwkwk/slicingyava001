import React, { useEffect, useRef } from "react";

const ProductCard = ({ product }: { product: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
    >
      <div className="bg-white shadow-md rounded overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;