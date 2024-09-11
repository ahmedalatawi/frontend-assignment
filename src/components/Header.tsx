import { useState } from "react";
import Star from "../assets/star.svg?react";
import LevelUpGaming from "../assets/level-up-gaming.svg?react";

const tabs = [
  {
    id: 1,
    name: "Store",
  },
  {
    id: 2,
    name: "Reviews",
  },
  {
    id: 3,
    name: "Blog",
  },
  {
    id: 4,
    name: "Media",
  },
  {
    id: 5,
    name: "Locations",
  },
  {
    id: 6,
    name: "Contact",
  },
];

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("Store");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-dark transition-all duration-700 fixed right-0 left-0 z-50 top-0">
      <div className="flex justify-between w-full mx-auto font-sans h-16">
        <div className="flex items-center gap-2 md:gap-3 mr-6 ml-6">
          <Star />
          <LevelUpGaming />
        </div>
        <div className="flex items-center sm:gap-2 md:gap-4 lg:gap-8">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setSelectedTab(tab.name)}
              className={`text-center ${
                selectedTab == tab?.name
                  ? "text-primary font-medium"
                  : "text-secondary font-normal"
              } opacity-100 hover:opacity-70 cursor-pointer md:flex md:items-center lg:text-lg text-base hidden`}
            >
              {tab.name}
            </span>
          ))}
          <button
            type="button"
            className="w-12 h-12 relative focus:outline-none md:hidden mr-6"
            onClick={() => setToggle(!toggle)}
          >
            <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  toggle ? "rotate-45" : "-translate-y-1.5"
                }  
                `}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  toggle && "opacity-0"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  toggle ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div className="items-center gap-3 md:gap-4 mr-6 ml-6 md:flex md:items-center hidden">
          <button
            className="font-medium align-middle text-center text-nowrap transition-all disabled:opacity-50 py-2 w-32 border border-white text-white text-base hover:opacity-75 active:opacity-[0.85] rounded-lg"
            type="button"
          >
            View Cart
          </button>
        </div>
        <div
          className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 top-11 ${
            toggle ? "visible z-20" : "invisible -z-10"
          }`}
        >
          <div
            className={`w-full h-full bg-black absolute left-0 transition-all duration-300 ease-in-out top-8 ${
              toggle ? "ssm:w-3/5 opacity-90" : "ssm:w-0 -z-10"
            }`}
          ></div>
          <div className="relative z-20 text-center pt-24 w-full ssm:w-3/5">
            <div
              className={`block min-h-[130px] w-fit mx-auto transform transition ${
                toggle
                  ? "opacity-100 -translate-y-1/3 delay-[0.30s]"
                  : "opacity-0 -translate-y-0  delay-[0s]"
              }`}
            >
              <ul
                className={`transition w-fit flex flex-col gap-5 my-5 ${
                  toggle ? "delay-[0.30s]" : "delay-[0s]"
                }`}
              >
                {tabs.map((tab) => (
                  <span
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.name)}
                    className={`text-lg text-center ${
                      selectedTab == tab?.name
                        ? "text-primary font-medium"
                        : "text-secondary font-normal"
                    } opacity-100 hover:opacity-70 cursor-pointer px-2 md:hidden`}
                  >
                    {tab.name}
                  </span>
                ))}
                <button
                  className="font-medium align-middle text-center text-nowrap disabled:opacity-50 py-2 w-32 border border-white text-white text-base hover:opacity-75 active:opacity-[0.85] rounded-lg"
                  type="button"
                >
                  View Cart
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
