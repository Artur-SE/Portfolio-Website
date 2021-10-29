import React from "react";
import { technologies } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

// Styling
import styled from "styled-components";

const Description = ({ information }) => {
  if (information === "Technologien") {
    return (
      <StyledDescription>
        <AnimatePresence>
          <motion.div
            className="description"
            initial="hidden"
            animate="visible"
            variants={toggleAnimation}
            exit={{ opacity: 0 }}
          >
            <p>
              Als erfahrener Verkäufer unterstützt Artur Sie dabei, Ihre
              Produkte & Dienstleistungen zu bewerben und an die richtige
              Zielgruppe zu verkaufen.
              <br />
              <br />
              Mit seinem IT Background realisiert er Ihr Projekt und macht es
              der ganzen Welt zugänglich.
              <br />
              <br />
              Ein angenehmes Arbeiten und die Zufriedenheit unseren Klienten ist
              uns sehr wichtig.
              <br />
              <br />
              Weshalb wir einen großen Wert darauf legen, die Zielsetzung und
              Herausforderung eines jeden Projektes gänzlich zu verstehen und zu
              meistern.
              <br />
              <br />
              Haben Sie Fragen oder Ideen für ein Projekt? Vielleicht haben Sie
              schon eine genaue Vorstellung Ihrer Idee? Vereinbaren Sie jetzt
              eine kostenlose Beratung.
              <br />
              <br />
              Wir freuen uns auf Sie!
            </p>
          </motion.div>
        </AnimatePresence>
      </StyledDescription>
    );
  } else {
    return (
      <AnimatePresence>
        <StyledTechnologies className="technologies">
          {technologies.map((technology) => {
            return (
              <motion.img
                initial="hidden"
                animate="visible"
                variants={toggleAnimation}
                exit={{ opacity: 0 }}
                src={technology.image}
                alt={technology.name}
                key={technology.id}
              />
            );
          })}
        </StyledTechnologies>
      </AnimatePresence>
    );
  }
};

const StyledDescription = styled.div`
  p {
    font-size: 1rem;
  }
`;

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
