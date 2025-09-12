import React, { useState, useEffect } from "react";
import "../styles.css";

interface GalaxyProps {
  name: string;
  type: string;
  url: string;
  funFact?: string;
  index?: number;
  galaxies?: GalaxyProps[];
}

const GalaxyCard: React.FC<GalaxyProps> = ({
  name,
  type,
  url,
  funFact,
  index = 0,
  galaxies = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const currentGalaxy = galaxies[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % galaxies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev: number) => (prev - 1 + galaxies.length) % galaxies.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <>
      <div className="galaxy-card card">
        <img
          src={url}
          alt={name}
          className="thumbnail"
          onClick={() => {
            setCurrentIndex(index);
            setShowModal(true);
          }}
        />
        <h3>{name}</h3>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="arrow left" onClick={handlePrev}>
              &#8592;
            </button>
            <img
              src={currentGalaxy.url}
              alt={currentGalaxy.name}
              className="modal-image"
            />
            <button className="arrow right" onClick={handleNext}>
              &#8594;
            </button>
            <div className="modal-info">
              <h2>{currentGalaxy.name}</h2>
              <p>
                <strong>Type:</strong> {currentGalaxy.type}
              </p>
              <p>
                <strong>Fun Fact:</strong>{" "}
                {currentGalaxy.funFact || "Test fun fact"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalaxyCard;
