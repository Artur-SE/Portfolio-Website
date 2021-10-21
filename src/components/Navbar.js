import React, { useState } from "react";

// Styling
import styled from "styled-components";

// Assets
import logo from "../assets/logo.svg";
import navIcon from "../assets/navIcon.svg";

const Navbar = () => {
  // State ----------------------------------------------------------------------

  const [showDropDown, setShowNavigation] = useState(false);
  // --------------------------------------------------------------------------

  const toggleNavigation = () => {
    setShowNavigation(!showDropDown);
  };

  // Return -------------------------------------------------------------------

  return (
    <StyledNavbar>
      <nav>
        <div className="navbar">
          <img src={logo} alt="Smart Development" className="logo" />

          <img
            onClick={toggleNavigation}
            src={navIcon}
            alt="navIcon"
            className="navIcon"
          />
          <ul className="nav-links-wideScreen">
            <li>Home</li>
            <li>Features</li>
            <li>Services</li>
            <li>About</li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className="nav-links-mobile">
          {showDropDown && (
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Services</li>
              <li>Über uns</li>
              <li>Kontakt</li>
            </ul>
          )}
        </div>
      </nav>
    </StyledNavbar>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledNavbar = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--backgroundColor2);

  nav {
    margin: 0 auto;
    max-width: var(--maxWidth);
  }
  .navbar {
    background-color: var(--backgroundColor2);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    height: 2.5rem;
    max-width: var(--maxWidth);
    margin: 0 auto;
  }
  .nav-links-wideScreen {
    display: none;
  }

  .logo {
    width: 15rem;
  }

  .navIcon {
    width: 2rem;
  }

  .nav-links-mobile {
    background-color: var(--backgroundColor2);
    position: absolute;
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  li {
    color: var(--textColor1);
    padding: 0.7rem 0;
  }

  /* Widescreen View ---------------------------------------------------------- */

  @media (min-width: 1023px) {
    .navIcon {
      display: none;
    }
    .nav-links-wideScreen {
      display: flex;
      ul {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      li {
        color: var(--textColor1);
        list-style: none;
        padding-right: 2rem;
      }
    }
  }
  /* -------------------------------------------------------------------------- */
`;

export default Navbar;
