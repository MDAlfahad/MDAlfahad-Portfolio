import React from "react";
import Navbar from "./Compnents/Navbar";
import Home from "./Compnents/Home";
import About from "./Compnents/About";
import Projects from "./Compnents/Projects";
import Contact from "./Compnents/Contact";
import Footer from "./Compnents/Footer";
import Skills from "./Compnents/DesignSkills";

const App = () => {

  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
