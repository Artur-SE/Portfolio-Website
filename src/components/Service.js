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
        <p>{description1}</p>
        <br />
        <p>{description2}</p>
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
          <p>{fullDescription}</p>
          <button
            className="btn-secondary"
            onClick={() => setShowModal(!showModal)}
          >
            Schließen
          </button>
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
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
// --------------------------------------------------------------------------

export default Service;
