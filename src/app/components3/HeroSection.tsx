"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    { name: "All Products", image: "/icons/all-products.png" },
    { name: "Granola", image: "/icons/granola.png" },
    { name: "Biscuits", image: "/icons/biscuits.png" },
    { name: "Bar", image: "/icons/bar.png" },
    { name: "Popcorn", image: "/icons/popcorn.png" },
    { name: "Puffs", image: "/icons/puffs.png" },
    { name: "Cashews", image: "/icons/cashews.png" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: "5rem 0 3rem",
        fontFamily: `'Poppins', sans-serif`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {/* Breadcrumbs */}
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#999",
            marginBottom: "1rem",
            fontFamily: `'WildWords', cursive`,
          }}
        >
          <span>Home</span> / <span>Our Foods</span>
        </div>

        {/* Title */}
        {activeCategory !== "All Products" && (
          <h1
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              fontFamily: `'WildWords', cursive`,
            }}
          >
            <span style={{ color: "#4B1A1B" }}>DISCOVER</span>
            <br />
            <span style={{ color: "#F31212" }}>YOUR PERFECT CRUNCH</span>
          </h1>
        )}

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80%",
              maxWidth: "600px",
            }}
          >
            <input
              type="text"
              placeholder="Find your perfect crunch..."
              style={{
                width: "100%",
                height: "40px",
                padding: "0 40px 0 10px", // Add padding for the search icon
                border: "1px solid #000", // Border hitam
                borderRadius: "20px",
                outline: "none",
                fontSize: "1rem",
                fontFamily: `'Poppins', sans-serif`,
                color: "#000", // Teks hitam
              }}
            />
            <button
              type="button"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Image
                src="/icons/src.png" // Replace with your search icon path
                alt="Search"
                width={35}
                height={35}
                style={{
                  objectFit: "contain",
                }}
              />
            </button>
          </div>
        </div>

        {/* Category Icons */}
        <div style={{ marginTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 11
              WebkitOverflowScrolling: "touch",
              paddingBottom: "0.5rem",
              justifyContent: "center",
            }}
            className="hide-scrollbar"
          >
            {categories.map((categoryObj) => (
              <div
                key={categoryObj.name}
                onClick={() => setActiveCategory(categoryObj.name)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "100px",
                  cursor: "pointer",
                  opacity: activeCategory === categoryObj.name ? 1 : 0.6,
                  transition: "all 0.3s ease",
                }}
              >
                {/* Transparent Card with Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    boxShadow: activeCategory === categoryObj.name
                      ? "0 4px 12px rgba(0,0,0,0.3)"
                      : "0 2px 5px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Image
                    src={categoryObj.image}
                    alt={categoryObj.name}
                    width={45}
                    height={45}
                    style={{
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onError={(error) =>
                      console.error("Error loading icon:", error)
                    }
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#000",
                    fontFamily: `'Poppins', sans-serif`,
                    textTransform: "capitalize",
                    textAlign: "center",
                  }}
                >
                  {categoryObj.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;