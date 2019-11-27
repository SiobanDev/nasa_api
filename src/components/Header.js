import React from 'react';
import logo from '../nasa-logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="app-logo" alt="logo"/>
        </header>
    );
}

export default Header;