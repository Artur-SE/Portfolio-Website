import React, { useState } from "react";
import artur from "../assets/artur 1-compressed.png";
import Description from "./Description";

// Styling
import styled from "styled-components";

const AboutMe = () => {
  // State --------------------------------------------------------------------

  const [information, setInformation] = useState("Technologien");
  // --------------------------------------------------------------------------

  // Functions ----------------------------------------------------------------

  const toggleInformation = () => {
    if (information === "Technologien") {
      setInformation("Beschreibung");
    } else {
      setInformation("Technologien");
    }
  };
  // --------------------------------------------------------------------------

  // Return -------------------------------------------------------------------
  return (
    <StyledAboutMe>
      <div className="container">
        <h1 className="headline">Ihr Ansprechpartner</h1>
        <div className="underline"></div>
        <img src={artur} alt="" />
        <h3 className="name">Artur Klein</h3>
        <div>
          <button className="btn-secondary" onClick={toggleInformation}>
            {information}
          </button>
        </div>
        <Description
          information={information}
          setInformation={setInformation}
        />
        {/* <a href="#contact">
          <button className="btn-primary">Kostenlose Beratung</button>
        </a> */}
      </div>
    </StyledAboutMe>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledAboutMe = styled.section`
  img {
    max-width: 150px;
  }
  h2 {
    color: var(--textColor1);
  }
  p {
    max-width: 700px;
    margin: 0 auto;
  }
  .name {
    margin-bottom: 0;
  }
  @media (min-width: 1023px) {
    img {
      max-width: 200px;
    }
  }
`;
// --------------------------------------------------------------------------

export default AboutMe;
