import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="nav">
      <button onClick={handleToggle}>{navbarOpen ? "open" : "close"}</button>
      <ul className={`navMenu ${navbarOpen ? "showMenu" : ""}`}>
        <li>
          <Link to="/">
            <div className="home">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <div>Movies</div>
          </Link>
        </li>
        <li>
          <Link to="/books">
            <div>Books</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
