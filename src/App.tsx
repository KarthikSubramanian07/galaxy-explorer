import React from "react";
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
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Galaxy Explorer - Demo</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {galaxies.map((galaxy, index) => (
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
