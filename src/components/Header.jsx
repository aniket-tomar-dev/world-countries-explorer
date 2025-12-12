import "../styles/Header.css";

export default function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={toggleTheme}>
          <i className="fa-regular fa-moon" /> Dark Mode
        </p>
      </div>
    </header>
  );
}
