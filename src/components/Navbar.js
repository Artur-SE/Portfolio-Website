import React, { useState } from "react";

// Styling
import styled from "styled-components";

// Assets
import Logo from "../assets/logo.svg";
import navIcon from "../assets/navIcon.svg";

const Navbar = () => {
  // State ----------------------------------------------------------------------
  const [showNavigation, setShowNavigation] = useState(false);
  // ----------------------------------------------------------------------------

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <StyledNavbar>
      <img src={Logo} alt="Smart Development" className="logo" />
      <img
        onClick={toggleNavigation}
        src={navIcon}
        alt="navIcon"
        className="navIcon"
      />
      {showNavigation && (
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Services</li>
          <li>About</li>
          <li>Kontakt</li>
        </ul>
      )}
    </StyledNavbar>
  );
};

// Styled Components
const StyledNavbar = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: var(--backgroundColor2);
  padding: 0.5rem 1rem;

  .logo {
    width: 15rem;
  }
  .navIcon {
    width: 2rem;
  }
`;

export default Navbar;
