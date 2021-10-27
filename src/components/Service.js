import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

// Styling
import styled from "styled-components";

const Service = ({
  name,
  description1,
  description2,
  fullDescription,
  image,
  showBackdrop,
  setShowBackdrop,
}) => {
  const [showModal, setShowModal] = useState(false);

  // State --------------------------------------------------------------------

  const toggleModal = () => {
    setShowBackdrop(!showBackdrop);
    setShowModal(!showModal);
  };
  // --------------------------------------------------------------------------

  // Return -------------------------------------------------------------------
  return (
    <StyledService>
      <div className="service">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <div>
          <p>{description1}</p>
          <br />
          <p>{description2}</p>
        </div>
      </div>
      <div>
        <button className="btn-secondary" onClick={() => toggleModal()}>
          Mehr Info
        </button>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fullDescription"
            initial="hidden"
            animate="visible"
            variants={toggleAnimation}
            exit={{ opacity: 0 }}
            onClick={() => toggleModal()}
          >
            <div className="fullDescription-container">
              <p>{fullDescription}</p>
            </div>
            <div>
              <button className="btn-secondary" onClick={() => toggleModal()}>
                Schließen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledService>
  );

  // --------------------------------------------------------------------------
};

// Styled Components ----------------------------------------------------------

const StyledService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    color: var(--primaryColor);
  }
  img {
    position: relative;
    top: 60px;
    height: 150px;
  }
  p {
    max-width: 400px;
    margin: 0 auto;
  }

  .fullDescription {
    background-color: var(--backgroundColor2);
    position: fixed;
    width: 90vw;
    max-width: 90vw;
    max-height: 70vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    border-radius: 10px;
    overflow-y: auto;
    box-shadow: 1px 5px 20px black;
    p {
      font-size: 1rem;
      line-height: 2rem;
      margin-top: 2rem;
      padding: 1rem;
    }
  }

  @media (min-width: 1023px) {
    p {
      max-width: 600px;
    }
    .fullDescription {
      padding: 3rem;
      width: auto;
      height: auto;
    }
  }
`;
// --------------------------------------------------------------------------

export default Service;
