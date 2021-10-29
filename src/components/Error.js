import React from "react";
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

const Error = () => {
  return (
    <StyledError>
      <motion.div initial="hidden" animate="visible" variants={toggleAnimation}>
        <h1>Ups!</h1>
        <p>Diese Seite existiert nicht...</p>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </motion.div>
    </StyledError>
  );
};

const StyledError = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Error;
