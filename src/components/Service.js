import React, { useState } from "react";

// Styling
import styled from "styled-components";

const Service = ({
  name,
  description1,
  description2,
  fullDescription,
  image,
}) => {
  const [showModal, setShowModal] = useState(false);
  // Return -----------------------------------------------------------------
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
        <button
          className="btn-secondary"
          onClick={() => setShowModal(!showModal)}
        >
          Mehr Info
        </button>
      </div>
      {showModal && (
        <div className="fullDescription">
          <div className="fullDescription-container">
            <p>{fullDescription}</p>
          </div>
          <div>
            <button
              className="btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Schließen
            </button>
          </div>
        </div>
      )}
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
    z-index: 1;
    border: 2px solid var(--primaryColor);
    border-radius: 10px;
    overflow-y: auto;

    p {
      font-size: 1rem;
      line-height: 2rem;
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
