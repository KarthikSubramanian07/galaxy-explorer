import React, { useId, useMemo, useState } from "react";

import GalaxyCard from "./components/GalaxyCard";
import "./styles.css";

const galaxies = [
  {
    name: "Whirlpool Galaxy (M51)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0506a.jpg",
    funFact:
      "The Whirlpool Galaxy’s spectacular spiral arms are star-formation factories, triggered by a close encounter with its companion NGC 5195—which is actively tugging on one of the arms, enhancing star birth across the entire galaxy.",
  },
  {
    name: "NGC 1300",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0501a.jpg",
    funFact:
      "NGC 1300's bar contains a 'spiral within a spiral' at its core—a rare phenomenon in barred spiral galaxies where gas funneled by the bar forms a miniature spiral structure at the center.",
  },
  {
    name: "Pinwheel Galaxy (Messier 101)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0602a.jpg",
    funFact:
      "The Pinwheel Galaxy boasts more than 3,000 distinct starbirth (HII) regions in its spiral arms, the highest known total for any galaxy of its type so far observed.",
  },
  {
    name: "NGC 2442 (Meathook Galaxy)",
    type: "Distorted Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1108b.jpg",
    funFact:
      "NGC 2442’s dramatically lopsided shape is thought to result from a collision with another galaxy, and one of its tightly curled spiral arms hosted a bright supernova visible even through small telescopes in 2015.",
  },
  {
    name: "NGC 4038/4039 (Antennae Galaxies)",
    type: "Merging Galaxies",
    url: "https://cdn.esahubble.org/archives/images/screen/potw1345a.jpg",
    funFact:
      "The Antennae Galaxies are merging in a violent cosmic collision, creating long tidal tails of stars, gas, and dust that look like insect antennae; their collision produces massive bursts of new star clusters—some of the youngest globular clusters ever catalogued.",
  },
  {
    name: "NGC 1512",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0106b.jpg",
    funFact:
      "The bar in NGC 1512 acts as a cosmic funnel, channeling star-forming material from the outer ring to the galaxy’s heart and fueling an intense circumnuclear starburst ring—thanks in part to its ongoing merger with the dwarf galaxy NGC 1510.",
  },
  {
    name: "NGC 4214",
    type: "Dwarf Irregular",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1109a.jpg",
    funFact:
      "NGC 4214 is ablaze with young stars and glowing gas clouds, making it an ideal real-life laboratory for astronomers to study star formation and evolution in detail—a true starburst dwarf irregular galaxy.",
  },
  {
    name: "NGC 6744",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1810a.jpg",
    funFact:
      "NGC 6744 is a close analog and 'big brother' to the Milky Way, with a disk even larger—about 175,000 light-years—making it one of the most Milky Way-like galaxies in the local universe.",
  },
  {
    name: "NGC 1672",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0706a.jpg",
    funFact:
      "At the heart of NGC 1672 lies a Seyfert-type active galactic nucleus: hot material swirling around a supermassive black hole creates powerful X-rays, while the galaxy's arms feature dazzling clouds of new, forming stars and even recorded supernovas.",
  },
  {
    name: "NGC 5866 (Spindle Galaxy)",
    type: "Lenticular",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0624a.jpg",
    funFact:
      "NGC 5866 is a lenticular galaxy viewed almost perfectly edge-on, revealing a striking and mysterious dust lane—unusual for its type—which suggests it still makes new stars at a slow pace, possibly due to past galactic collisions.",
  },
  {
    name: "Sombrero Galaxy (M104)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0328a.jpg",
    funFact:
      "The Sombrero Galaxy has a bright nucleus and a large central bulge, surrounded by a prominent dust lane that gives it the appearance of a sombrero hat.",
  },
  {
    name: "Black Eye Galaxy (M64)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0404a.jpg",
    funFact:
      "M64 is known for its dark band of absorbing dust in front of the galaxy’s bright nucleus, giving it the nickname 'Black Eye'. Its inner and outer regions rotate in opposite directions.",
  },
  {
    name: "2MASX J00482185-2507365 (Occulting Pair)",
    type: "Interacting Spiral Pair",
    url: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2008/09/STScI-01EVT683Z2ZN0WP76AA3HXVT0C.tif?w=975&h=958&fit=crop&crop=faces%2Cfocalpoint",
    funFact:
      "This overlapping pair of spiral galaxies reveals extended dusty arms far beyond the visible starry regions, offering insights into galactic dust distribution.",
  },
  {
    name: "NGC 3370",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/potw1415a.jpg",
    funFact:
      "Located in Leo, NGC 3370 is used to study Cepheid variable stars, which help astronomers measure extragalactic distances with high precision.",
  },
  {
    name: "Messier 81 (Bode’s Galaxy)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0710a.jpg",
    funFact:
      "M81 is one of the brightest galaxies in the night sky, located in Ursa Major, with sweeping spiral arms and a bright nucleus comparable to the Milky Way.",
  },
  {
    name: "NGC 4826 (Evil Eye Galaxy)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/potw2108a.jpg",
    funFact:
      "Also known as the Evil Eye Galaxy, NGC 4826 has a striking dark dust lane and counter-rotating gas layers, making it a favorite among amateur astronomers.",
  },
];

const galaxyTypes = [
  "Spiral",
  "Barred Spiral",
  "Distorted Spiral",
  "Merging Galaxies",
  "Dwarf Irregular",
  "Lenticular",
];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchId = useId();
  const resultsId = useId();

  const filteredGalaxies = useMemo(
    () =>
      galaxies.filter(
        (galaxy) =>
          galaxy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          galaxy.type.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const resultStatus =
    searchTerm.trim().length === 0
      ? `Showing all ${filteredGalaxies.length} galaxies.`
      : filteredGalaxies.length === 0
        ? `No galaxies match “${searchTerm.trim()}”.`
        : `Showing ${filteredGalaxies.length} ${
            filteredGalaxies.length === 1 ? "galaxy" : "galaxies"
          } matching “${searchTerm.trim()}”.`;

  const activeType = galaxyTypes.find(
    (type) => type.toLowerCase() === searchTerm.trim().toLowerCase()
  );

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to galaxy list
      </a>
      <header className="app-header">
        <h1>Galaxy Explorer</h1>
        <p className="app-tagline">
          Browse famous galaxies and filter them by name or type.
        </p>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section
          className="search-panel"
          aria-labelledby="search-heading"
        >
          <h2 id="search-heading" className="visually-hidden">
            Search and filter
          </h2>
          <div className="search-row">
            <label className="search-label" htmlFor={searchId}>
              Search by name or type
            </label>
            <input
              id={searchId}
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Spiral or Sombrero"
              autoComplete="off"
              aria-controls={resultsId}
              aria-describedby="search-hint"
            />
            <p id="search-hint" className="visually-hidden">
              Results update as you type. Use the type filters to jump to a
              galaxy type.
            </p>
            {searchTerm ? (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                Clear search
              </button>
            ) : null}
          </div>

          <div
            className="type-filters"
            role="group"
            aria-label="Filter by galaxy type"
          >
            {galaxyTypes.map((type) => {
              const pressed = activeType === type;
              return (
                <button
                  key={type}
                  type="button"
                  className={
                    pressed ? "type-filter is-active" : "type-filter"
                  }
                  aria-pressed={pressed}
                  onClick={() => setSearchTerm(type)}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </section>

        <p className="result-status" aria-live="polite" id={resultsId}>
          {resultStatus}
        </p>

        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="visually-hidden">
            Galaxy gallery
          </h2>
          {filteredGalaxies.length === 0 ? (
            <p className="empty-state" role="status">
              No galaxies match your search. Try another name or clear the
              filter.
            </p>
          ) : (
            <ul className="galaxy-grid">
              {filteredGalaxies.map((galaxy) => {
                const fullIndex = galaxies.findIndex(
                  (item) => item.name === galaxy.name
                );
                return (
                  <li key={galaxy.name} className="galaxy-grid-item">
                    <GalaxyCard
                      {...galaxy}
                      index={fullIndex}
                      galaxies={galaxies}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
