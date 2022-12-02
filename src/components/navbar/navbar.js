import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-link">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-link">
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className="nav-link">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;