import React from "react";
import GalaxyCard from "./components/GalaxyCard";
import "./styles.css";

const galaxies = [
  {
    name: "Whirlpool Galaxy (M51)",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0506a.jpg",
  },
  {
    name: "NGC 1300",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0501a.jpg",
  },
  {
    name: "Pinwheel Galaxy",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0602a.jpg",
  },
  {
    name: "NGC 2442",
    type: "Distorted Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1108b.jpg",
  },
  {
    name: "NGC 4038/4039 (Antennae Galaxies)",
    type: "Merging Galaxies",
    url: "https://cdn.esahubble.org/archives/images/screen/potw1345a.jpg",
  },
  {
    name: "NGC 1512",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0106b.jpg",
  },
  {
    name: "NGC 4214",
    type: "Dwarf Irregular",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1109a.jpg",
  },
  {
    name: "NGC 6744",
    type: "Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic1810a.jpg",
  },
  {
    name: "NGC 1672",
    type: "Barred Spiral",
    url: "https://cdn.esahubble.org/archives/images/screen/heic0706a.jpg",
  },
  {
    name: "NGC 5866",
    type: "Lenticular",
    url: "https://cdn.esahubble.org/archives/images/screen/opo0624a.jpg",
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
          <GalaxyCard key={index} {...galaxy} />
        ))}
      </div>
    </div>
  );
};

export default App;
