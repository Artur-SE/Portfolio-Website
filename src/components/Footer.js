import React from "react";
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Assets
import logo from "../assets/logo.svg";

const Footer = () => {
  // Return -------------------------------------------------------------------
  return (
    <StyledFooter>
      <div className="container">
        <img src={logo} alt="" />
        <Link to="/impressum">
          <p>Impressum</p>
        </Link>
        <Link to="datenschutz">
          <p>Datenschutz</p>
        </Link>
      </div>
    </StyledFooter>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledFooter = styled.section`
  background-color: var(--backgroundColor2);
  padding: 1rem;
  img {
    width: 13rem;
  }
`;
// --------------------------------------------------------------------------

export default Footer;
