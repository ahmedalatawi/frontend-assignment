import { useMemo, useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import { Product } from "./types";
import SearchToggle from "./components/SearchToggle";

import { PRODUCTS } from "./data";

function App() {
  const [isGridActive, setIsGridActive] = useState(true);
  const [searchText, setSearchText] = useState("");
  const keys = Object.keys(Object.assign({}, ...PRODUCTS));

  const filteredProducts = useMemo(() => {
    return searchText
      ? PRODUCTS.filter((product) =>
          keys.some((k) =>
            k === "id" || k === "image"
              ? false
              : product[k as keyof Product]
                  .toString()
                  .replace(/[^a-zA-Z0-9]/g, "")
                  .toLowerCase()
                  .includes(searchText)
          )
        )
      : PRODUCTS;
  }, [keys, searchText]);

  return (
    <div className="bg-black h-screen overflow-y-scroll">
      <Header />
      <Search searchText={searchText} onChangeSearchText={setSearchText}>
        <SearchToggle
          isGridActive={isGridActive}
          setIsGridActive={setIsGridActive}
        />
      </Search>
      <div
        className={`font-sans pt-7 pb-16 mx-auto lg:max-w-7xl ${
          isGridActive ? "max-w-lg" : ""
        } md:max-w-full px-8`}
      >
        <h2 className="text-xl font-semibold text-white mb-5">
          {searchText ? "Results" : "All Products"}
        </h2>

        {isGridActive ? (
          <Grid products={filteredProducts} onSelect={(p) => console.log(p)} />
        ) : (
          <List products={filteredProducts} onSelect={(p) => console.log(p)} />
        )}
      </div>
    </div>
  );
}

export default App;
