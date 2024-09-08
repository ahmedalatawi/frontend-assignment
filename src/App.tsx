import Grid from "./components/Grid";
import Header from "./components/Header";
import Search from "./components/Search";

import Ps5Controller from "./assets/products/ps5-controller.svg?react";
import Gamecube from "./assets/products/gamecube.svg?react";
import SteamDeck from "./assets/products/steam-deck.svg?react";
import SegaHandheld from "./assets/products/sega-handheld.svg?react";
import Playdate from "./assets/products/playdate.svg?react";
import NintendoSwitch from "./assets/products/nintendo-switch.svg?react";

const products = [
  {
    id: 1,
    name: "PS5 Controller",
    description:
      "A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.",
    image: <Ps5Controller className="h-full w-full" />,
    price: "70.00",
    badges: ["Tech", "Black"],
  },
  {
    id: 2,
    name: "Gamecube",
    description:
      "A compact and durable GameCube console with a unique, cube-shaped design.",
    image: <Gamecube className="h-full w-full" />,
    price: "120.00",
    badges: ["Tech", "Grey"],
  },
  {
    id: 3,
    name: "Steam Deck",
    description:
      "A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.",
    image: <SteamDeck className="h-full w-full" />,
    price: "350.00",
    badges: ["Tech", "Black"],
  },
  {
    id: 4,
    name: "Sega Handheld",
    description:
      "A classic Sega handheld console with a vibrant screen and a library of iconic games.",
    image: <SegaHandheld className="h-full w-full" />,
    price: "50.00",
    badges: ["Tech", "Black"],
  },
  {
    id: 5,
    name: "Playdate",
    description:
      "A charming, pocket-sized Playdate console with a unique crank controller.",
    image: <Playdate className="h-full w-full" />,
    price: "220.00",
    badges: ["Tech", "Yellow"],
  },
  {
    id: 6,
    name: "Nintendo Switch",
    description:
      "Console with a vibrant display, detachable Joy-Con controllers.",
    image: <NintendoSwitch className="h-full w-full" />,
    price: "350.00",
    badges: ["Tech", "Black"],
  },
];

function App() {
  return (
    <div className="bg-black h-screen overflow-y-scroll">
      <Header />
      <Search />
      <Grid products={products} onSelect={(p) => console.log(p)} />
    </div>
  );
}

export default App;
