import React, { useState } from "react";
import Service from "./Service";
import { services } from "../data/data";

// Styling
import styled from "styled-components";

const Services = ({ showBackdrop, setShowBackdrop }) => {
  // Return -------------------------------------------------------------------

  return (
    <StyledServices>
      <div className="container">
        <h1 className="headline">Services</h1>
        <div className="underline"></div>
        <div className="services">
          {services.map((service) => {
            return (
              <Service
                key={service.id}
                {...service}
                showBackdrop={showBackdrop}
                setShowBackdrop={setShowBackdrop}
              />
            );
          })}
        </div>
      </div>
    </StyledServices>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledServices = styled.section`
  @media (min-width: 1023px) {
    .services {
      display: grid;
      gap: 50px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
// ----------------------------------------------------------------------------

export default Services;
