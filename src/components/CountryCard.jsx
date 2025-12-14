import React from "react";
import { Link } from "react-router-dom";
import "../styles/countryCard.css";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  compareList = [],
  setCompareList,
}) {
  const isSelected = compareList.includes(name);

  const toggleCompare = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isSelected) {
      setCompareList(compareList.filter((c) => c !== name));
    } else if (compareList.length < 2) {
      setCompareList([...compareList, name]);
    }
  };

  return (
    <div className={`country-card ${isSelected ? "selected" : ""}`}>
      {/* ✅ Checkbox OUTSIDE Link */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={toggleCompare}
        className="compare-checkbox"
      />

      {/* ✅ Only content navigates */}
      <Link to={`/country/${name}`} className="card-link">
        <img src={flag} alt={`${name} Flag`} />

        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b> {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
}
