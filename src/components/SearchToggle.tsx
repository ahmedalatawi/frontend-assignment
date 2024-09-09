import GridLightIcon from "../assets/icons/grid-light-icon.svg?react";
import ListLightIcon from "../assets/icons/list-light-icon.svg?react";
import ListDarkIcon from "../assets/icons/list-dark-icon.svg?react";
import GridDarkIcon from "../assets/icons/grid-dark-icon.svg?react";

interface Props {
  isGridActive: boolean;
  setIsGridActive: (active: boolean) => void;
}

export default function SearchToggle({ isGridActive, setIsGridActive }: Props) {
  return (
    <div className="text-base mt-4 sm:mt-0 text-secondary bg-dark rounded-xl border border-borderColor inline-flex p-1 font-medium sm:max-w-48 w-full">
      <button
        type="button"
        onClick={() => setIsGridActive(true)}
        className={`inline-flex items-center justify-center gap-2 px-4 w-full ${
          isGridActive
            ? "rounded-lg bg-white text-black py-2 px-3.5"
            : "opacity-100 hover:opacity-70"
        }`}
      >
        {isGridActive ? <GridDarkIcon /> : <GridLightIcon />}
        <span>Grid</span>
      </button>
      <button
        type="button"
        onClick={() => setIsGridActive(false)}
        className={`inline-flex items-center justify-center gap-2 px-4 w-full ${
          isGridActive
            ? "opacity-100 hover:opacity-70"
            : "rounded-lg bg-white text-black py-2 px-3.5"
        }`}
      >
        {isGridActive ? <ListLightIcon /> : <ListDarkIcon />}
        <span>List</span>
      </button>
    </div>
  );
}
