import React from "react";

// Styling
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { backdrop } from "../animations/animations";

const Backdrop = () => {
  return (
    <StyledBackdrop>
      <AnimatePresence>
        <motion.div
          className="backdrop"
          initial="hidden"
          animate="visible"
          variants={backdrop}
          exit={{ opacity: 0 }}
        ></motion.div>
      </AnimatePresence>
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled.div`
  .backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    z-index: 1;
    background-color: var(--backgroundColor1);
  }

  @media (min-width: 1023px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

export default Backdrop;
