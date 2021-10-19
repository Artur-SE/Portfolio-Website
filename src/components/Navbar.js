import React from "react";

// Styling
import styled from "styled-components";

// Assets
import Logo from "../assets/logo.svg";
import navIcon from "../assets/navIcon.svg";

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={Logo} alt="Smart Development" className="logo" />
      <img src={navIcon} alt="navIcon" className="navIcon" />
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
    width: 2.5rem;
  }
`;

export default Navbar;
