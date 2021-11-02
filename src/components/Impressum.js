import React from "react";
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

const Impressum = () => {
  // Return ---------------------------------------------------------------------

  return (
    <StyledImpressum>
      <motion.div initial="hidden" animate="visible" variants={toggleAnimation}>
        <h1>Impressum</h1>

        <p>Angaben gem&auml;&szlig; &sect; 5 TMG</p>
        <p>
          Artur Klein
          <br />
          Herzogstra&szlig;e 60
          <br />
          40215 D&uuml;sseldorf
        </p>
        <p>Kontakt</p>
        <p>
          <br />
          E-Mail: arturklein.se@gmail.com
        </p>

        <p>EU-Streitschlichtung</p>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <p>https://ec.europa.eu/consumers/odr/</p>
          <br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <p>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle: <p>https://www.e-recht24.de</p>
        </p>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </motion.div>
    </StyledImpressum>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledImpressum = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;
// ----------------------------------------------------------------------------

export default Impressum;
