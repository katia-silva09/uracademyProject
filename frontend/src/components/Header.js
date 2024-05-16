import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);

    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
        // Cerrar el menú Vendor Panel si está abierto
        setIsVendorDropdownOpen(false);
    };

    const toggleVendorDropdown = () => {
        setIsVendorDropdownOpen(!isVendorDropdownOpen);
        // Cerrar el menú My Account si está abierto
        setIsAccountDropdownOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-success" style={{ backgroundColor: 'DarkSlateGray', fontSize: 20 }}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="navbar bg-body-tertiary">
                </nav>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/" style={{ fontFamily: 'Agbalumo', color: 'white', fontSize: 20 }}>URACADEMY</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/documentation" style={{ fontFamily: 'ADLaM Display', color: 'white', fontSize: 20 }}>Documentation</Link>
                        </li>
                        {/* My Account Dropdown */}
                        <li className="nav-item" style={{ fontFamily: 'ADLaM Display' }}>
                            <button className="nav-link btn" onClick={toggleAccountDropdown} style={{ color: 'white', fontSize: 20 }}>My Account</button>
                            <ul className={`dropdown-menu ${isAccountDropdownOpen ? 'show' : ''}`}>
                                <li><Link className="dropdown-item" style={{ color: 'blue', fontFamily: 'ADLaM Display' }} to="/customer/register">Register</Link></li>
                                <li><Link className="dropdown-item" style={{ color: 'blue', fontFamily: 'ADLaM Display' }} to="/customer/login">Login</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/customer/dashboard" style={{ fontFamily: 'ADLaM Display' }}>Control Panel</Link></li>
                                <li><Link className="dropdown-item" style={{ color: 'red', fontFamily: 'ADLaM Display' }} to="/customer/logout">Logout</Link></li>
                            </ul>
                        </li>
                        {/* End My Account Dropdown */}

                        {/* Vendor Panel Dropdown */}
                        <li className="nav-item" style={{ fontFamily: 'ADLaM Display' }}>
                            <button className="nav-link btn" onClick={toggleVendorDropdown} style={{ color: 'white', fontSize: 20 }}>Vendor Panel</button>
                            <ul className={`dropdown-menu ${isVendorDropdownOpen ? 'show' : ''}`}>
                                <li><Link className="dropdown-item" style={{ color: 'blue', fontFamily: 'ADLaM Display' }} to="/seller/register">Register</Link></li>
                                <li><Link className="dropdown-item" style={{ color: 'blue', fontFamily: 'ADLaM Display' }} to="/seller/login">Login</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/seller/dashboard" style={{ fontFamily: 'ADLaM Display' }}>Control Panel</Link></li>
                                <li><Link className="dropdown-item" style={{ color: 'red', fontFamily: 'ADLaM Display' }} to="/seller/logout">Logout</Link></li>
                            </ul>
                        </li>
                        {/* End Vendor Panel Dropdown */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
