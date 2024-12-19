import React from 'react';
import '../styles/Header.css';
import intercityLogo from "../assets/images/intercity-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>
            <img src={intercityLogo} alt="intercity" />
        </span>
      </div>
    </header>
  );
};

export default Header;
