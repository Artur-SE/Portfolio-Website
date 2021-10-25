import React from "react";

// Styling
import styled from "styled-components";

// Assets
import HeroImage from "./HeroImage";

import { motion } from "framer-motion";

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
        <HeroImage />
      </div>
      <div>
        <a href="#contact">
          <button className="btn-primary">Kostenlose Beratung</button>
        </a>
      </div>
    </StyledHero>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledHero = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  svg {
    padding-top: 0;
  }
  .container {
    margin-top: clamp(100px, 10vh, 500px);
  }

  button {
    margin-top: 0;
  }
`;
// --------------------------------------------------------------------------

export default Home;
