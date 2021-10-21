import React from "react";
import artur from "../assets/artur 1.png";

// Styling
import styled from "styled-components";

const AboutMe = () => {
  return (
    <StyledAboutMe>
      <div className="container">
        <h1 className="headline">Ihr Ansprechpartner</h1>
        <div className="underline"></div>
        <img src={artur} alt="" />
        <h2 className="name">Artur Klein</h2>
        <button className="btn-secondary">Technologien</button>
        <p>
          Als erfahrener Verkäufer unterstützt Artur Sie dabei, Ihre Produkte &
          Dienstleistungen zu bewerben und an die richtige Zielgruppe zu
          verkaufen.
          <br />
          <br />
          Mit seinem zusätzlichen IT Background schafft er es, Ihr Projekt zu
          realisieren und der ganzen Welt zugänglich zu machen.
          <br />
          <br />
          Ein angenehmes Arbeiten und die Zufriedenheit unseren Klienten ist uns
          sehr wichtig.
          <br />
          <br />
          Weshalb wir einen großen Wert darauf legen, die Zielsetzung und
          Herausforderung eines jeden Projektes gänzlich zu verstehen und zu
          meistern.
          <br />
          <br />
          Haben Sie Fragen oder Ideen für ein Projekt? Vielleicht haben Sie
          schon eine genaue Vorstellung Ihrer Idee? Vereinbaren Sie jetzt eine
          kostenlose Beratung.
          <br />
          <br />
          Wir freuen uns auf Sie!
        </p>
        <button class="btn-primary">Kostenlose Beratung</button>
      </div>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  img {
    max-width: 200px;
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
`;

export default AboutMe;
