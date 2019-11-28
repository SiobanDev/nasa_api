import React from 'react';
import logo from '../nasa-logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <a href="/">
                <img src={logo} className="app-logo" alt="logo"/>

            </a>
        </header>
    );
}

export default Header;