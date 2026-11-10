import React, { useEffect, useId, useRef, useState } from "react";
import "../styles.css";

interface GalaxyProps {
  name: string;
  type: string;
  url: string;
  funFact?: string;
  index?: number;
  galaxies?: GalaxyProps[];
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

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
  const titleId = useId();
  const descId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentGalaxy = galaxies[currentIndex] ?? {
    name,
    type,
    url,
    funFact,
  };

  const handleNext = () => {
    if (galaxies.length === 0) return;
    setCurrentIndex((prev: number) => (prev + 1) % galaxies.length);
  };

  const handlePrev = () => {
    if (galaxies.length === 0) return;
    setCurrentIndex(
      (prev: number) => (prev - 1 + galaxies.length) % galaxies.length
    );
  };

  const openModal = () => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("aria-hidden") !== "true"
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openButtonRef.current?.focus();
    };
  }, [showModal, galaxies.length]);

  return (
    <>
      <article className="galaxy-card card">
        <button
          type="button"
          className="galaxy-open"
          ref={openButtonRef}
          onClick={openModal}
          aria-haspopup="dialog"
          aria-label={`${name} ${type}. Open details.`}
        >
          <img src={url} alt="" className="thumbnail" />
          <span className="galaxy-open-label">
            <span className="galaxy-name">{name}</span>
            <span className="galaxy-type">{type}</span>
          </span>
        </button>
      </article>

      {showModal ? (
        <div
          className="modal"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="Close galaxy details"
            >
              Close
            </button>
            <button
              type="button"
              className="arrow left"
              onClick={handlePrev}
              aria-label="Previous galaxy"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <figure className="modal-media">
              <img
                src={currentGalaxy.url}
                alt={`Photograph of ${currentGalaxy.name}, a ${currentGalaxy.type} galaxy`}
                className="modal-image"
              />
            </figure>
            <button
              type="button"
              className="arrow right"
              onClick={handleNext}
              aria-label="Next galaxy"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
            <div className="modal-info" tabIndex={0}>
              <h2 id={titleId}>{currentGalaxy.name}</h2>
              <p>
                <strong>Type:</strong> {currentGalaxy.type}
              </p>
              <p id={descId}>
                <strong>Fun Fact:</strong>{" "}
                {currentGalaxy.funFact || "No fun fact available."}
              </p>
              <p className="modal-nav-hint">
                Use Left and Right arrow keys to move between galaxies, or
                Escape to close.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GalaxyCard;
