import React from "react";
import Image from "next/image";

interface CategoryIconProps {
  category: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category, image, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        outline: 'none',
        boxShadow: 'none',
        border: isActive ? '2px solid rgba(239, 68, 68, 0)' : 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        cursor: 'pointer', 
        transition: 'all 0.2s ease',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={image} alt={category} width={60} height={60} />
      <span
        style={{
          fontSize: '0.75rem',
          marginTop: '0.5rem',
          color: 'black',
        }}
      >
        {category}
      </span>
    </div>
  );
};

export default CategoryIcon;