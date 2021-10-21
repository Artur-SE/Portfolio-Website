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
        <Hero />
        <Services />
        <AboutMe />
        <Contact />
      </StyledApp>
      <Footer />
    </div>
  );
}

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export default App;
