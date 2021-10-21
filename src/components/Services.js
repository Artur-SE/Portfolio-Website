import React from "react";
import Service from "./Service";
import { services } from "../data/data";

// Styling
import styled from "styled-components";

const Services = () => {
  // Return -------------------------------------------------------------------
  return (
    <StyledServices>
      <div className="container">
        <h1 className="headline">Services</h1>
        <div className="underline"></div>
        <div className="services">
          {services.map((service, index) => {
            return <Service key={index} {...service} />;
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
      gap: 10px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
// ----------------------------------------------------------------------------

export default Services;
