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
        {/* <img src={heroImage} alt="responsive design" /> */}
        <HeroImage />
      </div>
      <motion.div
      // initial={{ x: "10vw", opacity: 0 }}
      // animate={{ x: "0", opacity: 1 }}
      // transition={{ delay: 1 }}
      >
        <a href="#contact">
          <button className="btn-primary">Kostenlose Beratung</button>
        </a>
      </motion.div>
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

  #cogwheel {
    color: red;
  }

  img {
    width: 100%;
    margin: 2rem 0 3rem 0;
  }

  h1 {
    margin-top: 10vh;
  }

  button {
    margin-top: 0;
  }
`;
// --------------------------------------------------------------------------

export default Home;
