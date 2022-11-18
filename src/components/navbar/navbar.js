import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="list-item">
                    <a href="/">Home</a>
                </li>
                <li className="list-item">
                    <a href="/projects">Projects</a>
                </li>
                <li className="list-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;