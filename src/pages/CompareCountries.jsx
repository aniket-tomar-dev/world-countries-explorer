import { useParams, Link } from "react-router-dom";
import countryData from "../../countryData";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../styles/compare.css";

export default function CompareCountries() {
  const { c1, c2 } = useParams();

  const country1 = countryData.find((c) => c.name.common === c1);
  const country2 = countryData.find((c) => c.name.common === c2);
  if (!country1 || !country2) return <h2>Country not found</h2>;

  return (
    <div className="compare-container">
      <Link to="/">
        <IoMdArrowRoundBack /> Back{" "}
      </Link>
      <div className="compare-grid">
        {[country1, country2].map((c) => (
          <div key={c.name.common} className="compare-card">
            <img src={c.flags.svg} alt={c.name.common} />
            <h2>{c.name.common}</h2>
            <p>
              <b>Population:</b> {c.population.toLocaleString()}
            </p>
            <p>
              <b>Region:</b> {c.region}
            </p>
            <p>
              <b>Capital:</b>
              {c.capital?.[0]}
            </p>
            <p>
              <b>Area:</b>
              {c.area} km²
            </p>
            <p>
              <b>Languages:</b> {Object.values(c.languages || {}).join(",")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
