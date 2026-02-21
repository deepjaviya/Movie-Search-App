import React, { useState } from 'react';
import "../styles/Header.css";
import Logo from "../assets/image/Logo.png";
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const [query, setQuery] = useState('');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && query.trim()) {
            navigate(`/search?q=${query}`);
            setIsNavbarOpen(false);
        }
    };

    const handleNavClick = () => {
        setIsNavbarOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(prev => !prev);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brands">
                        <div className="nav-logo">
                            <div className="logo" style={{ backgroundImage: `url(${Logo})` }}></div>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon">
                            <i className={`fa-solid ${isNavbarOpen ? "fa-xmark" : "fa-bars"}`}></i>
                        </span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " text-danger fw-bold" : "")} onClick={handleNavClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className={({ isActive }) => "nav-link" + (isActive ? " text-danger fw-bold" : "")} onClick={handleNavClick}>Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/series" className={({ isActive }) => "nav-link" + (isActive ? " text-danger fw-bold" : "")} onClick={handleNavClick}>Series</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/watchlist" className={({ isActive }) => "nav-link" + (isActive ? " text-danger fw-bold" : "")} onClick={handleNavClick}>WatchList</NavLink>
                            </li>
                        </ul>
                        <div className="search-container">
                            <input
                                type='search'
                                className="search-input"
                                placeholder='Search movie-series'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
