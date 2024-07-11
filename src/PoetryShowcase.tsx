import React from "react";

import "./PoetryShowcase.scss"

const PoetryShowcase: React.FC = () => {
  const poetryImages = [
    "/src/assets/poetry_1.png",
    "/src/assets/Girl I Met.png",
    "/src/assets/Beautiful.png",
    "/src/assets/20240711_084039.jpg",
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
