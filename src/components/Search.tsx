import SearchIcon from "../assets/icons/search-icon.svg?react";
import SearchToggle from "./SearchToggle";

export default function Search() {
  return (
    <form className="sm:flex sm:items-center w-full max-w-7xl mx-auto pt-32 px-8 gap-7">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-dark border border-borderColor text-white text-base placeholder-secondary rounded-xl block w-full ps-10 p-3"
          placeholder="Search..."
          required
        />
      </div>
      <SearchToggle />
    </form>
  );
}
