import React from "react";

// Styling
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { backdrop } from "../animations/animations";

const Backdrop = () => {
  return (
    <AnimatePresence>
      <StyledBackdrop>
        <motion.div
          className="backdrop"
          initial="hidden"
          animate="visible"
          variants={backdrop}
          exit={{ opacity: 0 }}
        ></motion.div>
      </StyledBackdrop>
    </AnimatePresence>
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
`;

export default Backdrop;
