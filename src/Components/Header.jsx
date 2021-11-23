import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const [navbarOpen, setNavbarOpen] = useState();
  const [newForm, setNewForm] = useState({
    name: "",
    url: "",
  });
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleChange = () => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
    setNewForm(newState);
  };
  const handleBookSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="navContainer">
      <nav className="nav">
        <Link to="/">
          <img src="https://i.imgur.com/CUJNegc.png" alt="icon" />
        </Link>

        <button onClick={handleToggle}>
          {navbarOpen ? (
            ""
          ) : (
            <img src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png" />
          )}
        </button>
      </nav>
      <div className={`navMenu ${navbarOpen ? "showMenu" : ""}`}>
        <div onClick={handleToggle}>
          <img src="https://img.icons8.com/ios/100/000000/menu-squared-2--v2.png" />
        </div>

        <div>
          <Link to="/">
            <div className="home">Home</div>
          </Link>
        </div>
        <div>
          <Link to="/movies">
            <div>Movies</div>
          </Link>
        </div>
        <div>
          <Link to="/books">
            <div>Books</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
