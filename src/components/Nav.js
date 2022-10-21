import { Link}  from "react-router-dom";
import "./Nav.css";

const Nav=() =>{
    return (
    <nav className="nav-container">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/products">Product</Link>
                </li>
                <li>
                <Link to ="/profiles">profiles</Link>
            </li>
            <li>
            <Link to="/movies">movies</Link>
            </li>
            <li>
            <Link to="/favorites">Favorite movies</Link>
            </li>

        </ul>
    </nav>
    );
};

export default Nav;

