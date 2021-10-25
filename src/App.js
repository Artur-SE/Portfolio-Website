import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "./animations/animations";

function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // transition={{ duration: 1.5 }}
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
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export default App;
