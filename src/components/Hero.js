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

// Styled Component -----------------------------------------------------------

const StyledHero = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .container {
    max-width: var(--maxWidth);
    margin: 0 auto;
    text-align: center;
  }

  .headline {
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--textColor1);
  }

  .hero-image {
    width: 80%;
    padding: 3rem 0;
  }

  /* Widescreen View ---------------------------------------------------------- */

  @media (min-width: 1023px) {
    max-width: 900px;
    .btn-primary {
      font-size: 1.5rem;
    }
  }
  /* -------------------------------------------------------------------------- */
`;

export default Home;
