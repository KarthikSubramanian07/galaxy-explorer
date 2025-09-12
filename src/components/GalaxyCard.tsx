import React, { useState } from "react";
import "../styles.css";

interface GalaxyProps {
  name: string;
  type: string;
  url: string;
}

const GalaxyCard: React.FC<GalaxyProps> = ({ name, type, url }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="galaxy-card">
        <img
          src={url}
          alt={name}
          className="thumbnail"
          onClick={() => setShowModal(true)}
        />
        <h3>{name}</h3>
        <p>Type: {type}</p>
      </div>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={url} alt={name} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalaxyCard;
