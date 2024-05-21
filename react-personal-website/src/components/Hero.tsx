import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div>
      <section id="intro" className="container-fluid mx-auto">
        <div className="row justify-content-center">
          <div className="text-container">
            <p className="name">
              Hi, my name is<span>Carlos Acosta.</span>
            </p>
            <h2>I'm a developer.</h2>
            <i className="bi bi-chevron-double-down arrow-icon"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
