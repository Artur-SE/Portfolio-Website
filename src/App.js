import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Error from "./components/Error";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "./animations/animations";

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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
                <Services />
              </section>
              <section id="about">
                <AboutMe />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </StyledApp>
            <Footer id="footer" />
          </motion.div>
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
        <Route path="/datenschutz">
          <Datenschutz />
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
