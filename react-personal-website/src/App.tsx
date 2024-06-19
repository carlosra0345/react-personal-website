import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainAboutMe from "./components/MainAboutMe";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactMe from "./components/ContactMe";
import FooterWave from "./components/FooterWave";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainAboutMe />
      <Experience />
      <FeaturedProjects />
      <ContactMe />
      <FooterWave />
    </div>
  );
}

export default App;
