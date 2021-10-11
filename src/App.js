import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Projects />
      <Testimonials />
      <Contact />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
