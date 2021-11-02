import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Error from "./components/Error";
import ThankYou from "./components/ThankYou";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "./animations/animations";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={toggleAnimation}
          >
            <Navbar />
            <StyledApp>
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <Services
                  showBackdrop={showBackdrop}
                  setShowBackdrop={setShowBackdrop}
                />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </StyledApp>
            <Footer id="footer" />
            {showBackdrop && <Backdrop />}
          </motion.div>
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
        <Route path="/datenschutz">
          <Datenschutz />
        </Route>
        <Route path="/thankyou">
          <ThankYou />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export default App;
