import React from "react";

import "./PoetryShowcase.scss"

import poetry_1 from "./poetry/poetry_1.png"
import poetry_2 from "./poetry/poetry_2.png"
import poetry_3 from "./poetry/poetry_3.png"
const PoetryShowcase: React.FC = () => {
  const poetryImages = [
    poetry_1,
    poetry_2,
    poetry_3,
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
