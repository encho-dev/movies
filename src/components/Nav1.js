import { Link}  from "react-router-dom";
import "./Nav1.css";

const Nav1=() =>{
    return (
    <nav className="nav1-container">
        <ul>
            <li>
                <Link to="/">User name</Link>
            </li>
            <li>
                <Link to="/login">Age</Link>
            </li>
            <li>
                <Link to="/register">email</Link>
            </li>
            <li>
                <Link to="/products">Adress</Link>
            </li>
        </ul>
    </nav>
    );
};

export default Nav1;