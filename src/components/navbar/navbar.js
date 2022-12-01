import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar;