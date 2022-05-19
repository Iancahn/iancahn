import React from 'react';
import logo from '../img/logo.png';

function Logo() {
    return (
        <div className="main-logo">
            <img className="logo" src={logo} alt="just our little logo" />
        </div>
    );
};

export default Logo;