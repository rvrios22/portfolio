import "./navbar.css"
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <>
            <div className="navbar" >
                <ul className="nav-list">
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
                <div className="nav-toggle-button-container">
                    <button className="nav-toggle-button"
                        onClick={() => {
                            setExpandNavbar((prev) => !prev);
                        }}
                    >
                        <MenuIcon></MenuIcon>
                    </button>
                </div>
            </div>
            <div className="hidden-menu" >
                <ul className="nav-list-hidden" id={expandNavbar ? 'nav-menu-open' : 'nav-menu-close'}>
                    <li className="nav-link-hidden">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-link-hidden">
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className="nav-link-hidden">
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;