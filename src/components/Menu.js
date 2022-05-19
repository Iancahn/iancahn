import React from 'react';

function Menu() {
    return (
        <div>
            <ul className="nav-menu">
                <a href="#hello" className="active">Hello</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contact</a>
            </ul>
        </div>
    );
};

export default Menu;