"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div
      style={{
        fontSize: "0.875rem",
        color: "#FE8301",
        marginBottom: "1rem",
        fontWeight: 500,
        textAlign: "left",
      }}
    >
      {/* Tombol Home */}
      <Link
        href="/"
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          marginRight: "0.5rem",
        }}
      >
        Home
      </Link>
      {" / "}
      {/* Tombol Our Foods */}
      <span
        onClick={() => setActiveCategory("All Products")}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Our Foods
      </span>
    </div>
  );
};

export default Breadcrumb;