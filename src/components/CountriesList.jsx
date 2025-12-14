import React, { useState } from "react";
import countriesData from "../../countryData";
import CountryCard from "./CountryCard";

export default function CountriesList({
  query,
  region,
  compareList,
  setCompareList,
}) {
  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .filter((country) => (region ? country.region === region : true))
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                compareList={compareList} // ✅ pass down
                setCompareList={setCompareList}
              />
            );
          })}
      </div>
    </>
  );
}
