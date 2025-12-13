import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import CountriesList from "../components/CountriesList";

export default function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      <CountriesList query={query} region={region} />
    </main>
  );
}
