import React from "react";

import "./PoetryShowcase.scss"

import poetry_1 from "./poetry/Lose Her.png"
import poetry_2 from "./poetry/2.png"
import poetry_3 from "./poetry/poetry_3.png"
import poetry_4 from "./poetry/Copy of Only girl I desire.png"
import poetry_5 from "./poetry/It's not erased .png"
import poetry_6 from "./poetry/Girl I Met.png"
import poetry_7 from "./poetry/Afterlife .png"

const PoetryShowcase: React.FC = () => {
  const poetryImages = [
    poetry_1,
    poetry_2,
    poetry_3,
    poetry_4,
    poetry_5,
    poetry_6,
    poetry_7
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
