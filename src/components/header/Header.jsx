import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="#main" className="header__left">
        <span className="header__left_logo">👋🏻</span>
        <span className="header__left_name">ILYASS ELARBAOUTI</span>
      </a>
      <div className="header__right">
        <span className="header__right_text">MENU</span>
        <div className="header__right_burger">
          <span className="header__right_burger-bar1"></span>
          <span className="header__right_burger-bar2"></span>
          <span className="header__right_burger-bar3"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
