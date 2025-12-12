import { useParams, Link } from "react-router-dom";
import countriesData from "../../countryData";
import "../styles/CountryDetails.css";

export default function CountryDetails() {
  const { name } = useParams();
  const country = countriesData.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) return <h2>Country not found</h2>;

  return (
    <div className="country-details-container">
      <Link to="/" className="back-btn">
        ⬅ Back
      </Link>

      <div className="details-content">
        <img
          className="details-img"
          src={country.flags.svg}
          alt={country.name.common}
        />

        <div>
          <h1>{country.name.common}</h1>

          <p>
            <b>Population:</b> {country.population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Sub Region:</b> {country.subregion}
          </p>
          <p>
            <b>Capital:</b> {country.capital?.[0]}
          </p>

          <p>
            <b>Top Level Domain:</b> {country.tld?.join(", ")}
          </p>
          <p>
            <b>Currencies:</b>
            {country.currencies
              ? Object.keys(country.currencies).join(", ")
              : "N/A"}
          </p>
          <p>
            <b>Languages:</b>
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
