import React from "react";

import "./PoetryShowcase.scss"

const PoetryShowcase: React.FC = () => {
  const poetryImages = [
    "./poetry/poetry_1.png",
    "./poetry/Girl I Met.png",
    "./poetry/Beautiful.png",
    "./poetry/20240711_084039.jpg",
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
