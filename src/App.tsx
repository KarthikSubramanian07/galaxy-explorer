import React, { useState } from "react";

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

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGalaxies = galaxies.filter(
    (galaxy) =>
      galaxy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      galaxy.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Galaxy Explorer</h1>

      {/*Search Option */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredGalaxies.map((galaxy, index) => (
          <GalaxyCard
            key={index}
            {...galaxy}
            index={index}
            galaxies={galaxies}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
