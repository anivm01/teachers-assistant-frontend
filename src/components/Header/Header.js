import "./Header.scss";
import taLogo from "../../assets/svg/teachers-assistant-logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import closeNav from "../../assets/svg/close-nav.svg";
import { Link, useNavigate } from "react-router-dom";
import LoggedInNav from "../LoggedInNav/LoggedInNav";
import LoggedOutNav from "../LoggedOutNav/LoggedOutNav";
import MainNav from "../MainNav/MainNav";
import { useState } from "react";

function Header({ isLoggedIn, setIsLoggedIn, isNavVisible, setIsNavVisible }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <img
              className="header__logo"
              src={taLogo}
              alt="teacher's assistant website logo"
            />
          </Link>
          <h1 className="header__title">Teacher's Assistant</h1>
          <button
            onClick={() => {
              setIsNavVisible((current) => !current);
            }}
            className="header__mobile-nav"
          >
            <img
              className="header__hamburger"
              src={!isNavVisible ? hamburger : closeNav}
              alt="hamburger menu"
            />
          </button>
        </div>
        {isNavVisible && (
          <MainNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </>
  );
}

export default Header;
