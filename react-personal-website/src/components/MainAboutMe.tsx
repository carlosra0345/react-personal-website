import React from "react";
import Heading from "./Heading";
import GeneralButton from "./GeneralButton";
import personalHeadshot from "../assets/personalHeadshot.svg";
import "../styles/MainAboutMe.css";

const MainAboutMe = () => {
  return (
    <div style={{ marginBottom: "10rem", }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading num={1} title={"A little about me"} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <img src={personalHeadshot} height={300} alt="Personal headshot of Carlos Acosta" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "35%" }}>
          <p className="main-text-style">I am an undergraduate Computer Science Student at <a rel="noopener" target="_blank" className="link-style" href="https://www.tamu.edu/index.html">Texas A&M University</a>.</p>
          <p className="main-text-style">
            Currently, i'm interning as a <a rel="noopener" target="_blank" className="link-style" href="https://www.mastercard.us/en-us/business/issuers/grow-your-business/open-banking-solutions.html">Software Engineer within Mastercard's Platform Engineering team</a>.
            Additionally, I am actively involved in <a rel="noopener" target="_blank" className="link-style" href="https://www.math.tamu.edu/directory/formalpg.php?user=daripa">undergraduate research</a>, specifically focusing on modeling the effects of surfactant
            on polymer flooding in enhanced oil recovery.
          </p>
          <div style={{ alignSelf: "center" }}>
            <GeneralButton content="Learn More" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainAboutMe;
