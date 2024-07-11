import React from "react";

import "./PoetryShowcase.scss"

const PoetryShowcase: React.FC = () => {
  const poetryImages = [
    "./assets/poetry_1.png",
    "./assets/Girl I Met.png",
    "./assets/Beautiful.png",
    "./assets/20240711_084039.jpg",
  ];

  return (
    <div className="poetry-showcase">
      {poetryImages.map((image, index) => (
        <div className="poetry-item" key={index}>
          <img src={image} alt={`Poetry ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PoetryShowcase;
