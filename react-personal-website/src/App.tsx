import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainAboutMe from "./components/MainAboutMe";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainAboutMe />
      <Experience />
    </div>
  );
}

export default App;
