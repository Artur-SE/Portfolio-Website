import React from "react";

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
        <p>Impressum</p>
        <p>Datenschutz</p>
      </div>
    </StyledFooter>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledFooter = styled.section`
  background-color: var(--backgroundColor2);
  padding: 1rem;
`;
// --------------------------------------------------------------------------

export default Footer;
