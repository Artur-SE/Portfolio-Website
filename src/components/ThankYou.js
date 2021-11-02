import React from "react";
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

const ThankYou = () => {
  // Return -------------------------------------------------------------------

  return (
    <StyledThankYou>
      <motion.div initial="hidden" animate="visible" variants={toggleAnimation}>
        <h1>
          Vielen Dank für Ihre Nachricht!
          <br />
          <br />
          Wir werden uns sobald wie möglich bei Ihnen melden.
        </h1>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </motion.div>
    </StyledThankYou>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledThankYou = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// ----------------------------------------------------------------------------

export default ThankYou;
