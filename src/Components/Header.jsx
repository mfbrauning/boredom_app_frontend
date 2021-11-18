import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const [navbarOpen, setNavbarOpen] = useState();
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="nav">
        <img src="https://i.imgur.com/HLDYhVj.png" alt="" />
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <img src="https://img.favpng.com/16/13/21/computer-icons-cross-delete-button-desktop-wallpaper-png-favpng-bRPiPNtSuw4khCw13rsDc3LpQ.jpg" />
          ) : (
            <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" />
          )}
        </button>
      </nav>
      <ul className={`navMenu ${navbarOpen ? "showMenu" : ""}`}>
        <li>
          <button onClick={handleToggle}>
            <img src="https://i.imgur.com/wttvbes.png" />
          </button>
        </li>
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
    </>
  );
}

export default Header;
