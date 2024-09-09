import { ReactNode } from "react";
import SearchIcon from "../assets/icons/search-icon.svg?react";

interface Props {
  searchText: string;
  children: ReactNode;
  onChangeSearchText: (searchText: string) => void;
}

export default function Search({
  searchText,
  children,
  onChangeSearchText,
}: Props) {
  return (
    <div className="sm:flex sm:items-center w-full max-w-7xl mx-auto pt-28 px-8 gap-7">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-dark border border-borderColor text-white text-base placeholder-secondary focus:border-secondary focus:outline-none rounded-xl block w-full ps-10 p-3"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => onChangeSearchText(e.target.value)}
        />
      </div>
      {children}
    </div>
  );
}
