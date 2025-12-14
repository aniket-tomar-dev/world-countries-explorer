import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import CountriesList from "../components/CountriesList";
import { Link } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [compareList, setCompareList] = useState([]);

  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      <CountriesList
        query={query}
        region={region}
        compareList={compareList}
        setCompareList={setCompareList}
      />
      {compareList.length === 2 && (
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <Link
            to={`/compare/${compareList[0]}/${compareList[1]}`}
            className="compare-btn"
          >
            Compare Selected Countries
          </Link>
        </div>
      )}
    </main>
  );
}
