import Grid from "./components/Grid";
import Header from "./components/Header";
import Search from "./components/Search";

import { PRODUCTS } from "./data";

import List from "./components/List";

function App() {
  return (
    <div className="bg-black h-screen overflow-y-scroll">
      <Header />
      <Search />
      {/* <Grid products={PRODUCTS} onSelect={(p) => console.log(p)} /> */}
      <List products={PRODUCTS} onSelect={(p) => console.log(p)} />
    </div>
  );
}

export default App;
