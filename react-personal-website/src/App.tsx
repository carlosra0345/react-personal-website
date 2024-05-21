import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainAboutMe from "./components/MainAboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainAboutMe />
    </div>
  );
}

export default App;
