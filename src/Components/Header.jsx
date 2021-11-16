import {Link} from "react-router-dom"

function Header(props){
    return <div className="nav">
            <Link to="/">
                <div className="home">Home</div>
            </Link>
            <Link to="/movies">
                <div>Movies</div>
            </Link>
            <Link to ="/books">
                <div>Books</div>
            </Link>
        </div>
}

export default Header