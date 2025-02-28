import React from "react";
import Navbar from "./components/Nav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutMe from "./components/AboutMe.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import Testimonial from "./components/Testimonial.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <Navbar />
      </header>

      {/* Sections with IDs for smooth scrolling */}
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="testimonials">
          <Testimonial />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
