import React, { useState } from "react";
import "../styles.css";

interface GalaxyProps {
  name: string;
  type: string;
  url: string;
  funFact?: string;
}

const GalaxyCard: React.FC<GalaxyProps> = ({ name, type, url, funFact }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="galaxy-card card">
        <img
          src={url}
          alt={name}
          className="thumbnail"
          onClick={() => setShowModal(true)}
        />
        <h3>{name}</h3>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={url} alt={name} className="modal-image" />
            <div className="modal-info">
              <h2>{name}</h2>
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Fun Fact:</strong> {funFact || "Test fun fact"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalaxyCard;
