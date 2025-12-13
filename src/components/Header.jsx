import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <h2>
          <Link to="/" className="title">
            Where in the world?
          </Link>
        </h2>
        <p className="theme-changer" onClick={toggleTheme}>
          <i className="fa-regular fa-moon" /> Dark Mode
        </p>
      </div>
    </header>
  );
}
