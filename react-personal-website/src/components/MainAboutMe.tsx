import React from "react";
import Heading from "./Heading";
import GeneralButton from "./GeneralButton";
import personalHeadshot from "../assets/personalHeadshot.svg";
import "../styles/MainAboutMe.css";
import "../styles/SocialIcons.css";

const MainAboutMe = () => {
  return (
    <div style={{ marginTop: "5rem", marginBottom: "10rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading num={1} title={"A little about me"} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={personalHeadshot}
            height={300}
            alt="Personal headshot of Carlos Acosta"
          />
          <div className="row social-icon">
            <ul>
                <li><a id="mail-logo" className="social-background" href="mailto:carlosra0345@gmail.com" target="_blank"><i className="fa fa-regular fa-envelope"></i></a></li>
                <li><a id="github-logo" className="social-background" href="https://github.com/carlosra0345" target="_blank"><i className="fa fa-brands fa-github"></i></a></li>
                <li><a id="linkedin-logo" className="social-background" href="https://www.linkedin.com/in/carlos-acosta02/" target="_blank"><i className="fa fa-brands fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "35%",
          }}
        >
          <p className="main-text-style">
            I am an undergraduate Computer Science Student at{" "}
            <a
              rel="noopener"
              target="_blank"
              className="link-style"
              href="https://www.tamu.edu/index.html"
            >
              Texas A&M University
            </a>
            .
          </p>
          <p className="main-text-style">
            Currently, i'm interning as a{" "}
            <a
              rel="noopener"
              target="_blank"
              className="link-style"
              href="https://www.mastercard.us/en-us/business/issuers/grow-your-business/open-banking-solutions.html"
            >
              Software Engineer within Mastercard's Platform Engineering team
            </a>
            . Additionally, I am actively involved in{" "}
            <a
              rel="noopener"
              target="_blank"
              className="link-style"
              href="https://www.math.tamu.edu/directory/formalpg.php?user=daripa"
            >
              undergraduate research
            </a>
            , specifically focusing on modeling the effects of surfactant on
            polymer flooding in enhanced oil recovery.
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
