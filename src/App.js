import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Styling
import styled from "styled-components";

function App() {
  return (
    <div>
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
    </div>
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export default App;
