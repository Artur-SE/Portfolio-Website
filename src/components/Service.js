import React from "react";

// Styling
import styled from "styled-components";

const Service = ({ name, description, image }) => {
  return (
    <StyledService>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </StyledService>
  );
};

const StyledService = styled.div`
  h1 {
    color: var(--primaryColor);
  }
  img {
    position: relative;
    top: 60px;
  }
  p {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export default Service;
