import React from 'react';
import Logo from "../components/Logo"
import Menu from "../components/Menu"

function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <Menu />
        </div>
    );
};

export default Navbar;