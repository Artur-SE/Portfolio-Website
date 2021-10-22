import React from "react";
import { technologies } from "../data/data";

// Styling
import styled from "styled-components";

const Description = ({ information }) => {
  if (information === "Technologien") {
    return (
      <StyledDescription className="description">
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
      </StyledDescription>
    );
  } else {
    return (
      <StyledTechnologies className="technologies">
        {technologies.map((technology) => {
          return (
            <img
              src={technology.image}
              alt={technology.name}
              key={technology.id}
            />
          );
        })}
      </StyledTechnologies>
    );
  }
};

const StyledDescription = styled.div``;
const StyledTechnologies = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 300px;
  margin: 0 auto;

  img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
`;

export default Description;
