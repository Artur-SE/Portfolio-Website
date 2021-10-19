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
        <p className="headline">Wir bauen & unterstützen Ihr Traumprojekt</p>
        <p>
          <span>W</span>
          ebsites,
          <span> P</span>
          rogramme,
          <span> D</span>
          esigns und mehr...
        </p>
        <img src={heroImage} alt="responsive design" className="hero-image" />
        <button className="btn-primary">Kostenlose Beratung</button>
      </div>
    </StyledHero>
  );
  // --------------------------------------------------------------------------
};

const StyledHero = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;

  .container {
    max-width: var(--maxWidth);
    margin: 0 auto;
    text-align: center;
  }

  .headline {
    font-size: 2.5rem;
    color: var(--textColor1);
  }

  .hero-image {
    width: 80%;
    padding: 3rem 0;
  }
`;

export default Home;
