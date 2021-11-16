import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="home">Home</div>
      </Link>
      <Link to="/movies">
        <div>Movies</div>
      </Link>
      <Link to="/books">
        <div>Books</div>
      </Link>
    </nav>
  );
}

export default Header;
