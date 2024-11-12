import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import CustomButton from './common/Button'

const Header = ({ onMenuStateChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        onMenuStateChange(isMenuOpen);
    }, [isMenuOpen, onMenuStateChange]);

    return (
        <header className="header">
            <h1 className="header-logo">WFL</h1>

            <nav className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/how-it-works" className="nav-link">
                            How it works?
                        </Link>
                    </li>
                    <li>
                        <Link to="/why-us" className="nav-link">
                            Why Us?
                        </Link>
                    </li>
                    <li>
                        <Link to="/benefits" className="nav-link">
                            Benefits
                        </Link>
                    </li>
                    <li>
                        <Link to="/plans" className="nav-link">
                            Plans
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="btn_menu">
                <CustomButton
                    color="#0000008F"
                    bgColor="#f1f3f6"
                    boxShadowColor="rgba(0, 100, 100, 0.2)"
                    location="header"
                >
                    Sign Up
                </CustomButton>

                <label className="container">
                    <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
                    <div className="checkmark">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
            </div>
        </header>
    )
}

export default Header