import React from "react";

// Styling
import styled from "styled-components";

// Assets
import heroImage from "../assets/hero.svg";

const Home = () => {
  // Return -------------------------------------------------------------------

  return (
    <StyledHero>
      <div className="container">
        <h1>Wir bauen & unterstützen Ihr Traumprojekt</h1>
        <h3>
          <span>W</span>
          ebsites,
          <span> P</span>
          rogramme,
          <span> D</span>
          esigns und mehr...
        </h3>
        <img src={heroImage} alt="responsive design" />
      </div>
      <button className="btn-primary">Kostenlose Beratung</button>
    </StyledHero>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledHero = styled.section`
  img {
    max-width: 80%;
  }
`;

export default Home;
