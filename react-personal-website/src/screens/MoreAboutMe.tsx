import Navbar from "../components/Navbar";
import personalHeadshot from "../assets/personalHeadshot.svg";
import SocialIcons from "../components/SocialIcons";
import ContainerImage from "../components/ContainerImage";
import Cp4Book from "../assets/cp4.svg";
import Ddia from "../assets/ddia.svg";
import Chm from "../assets/chm.svg";
import NeonPill from "../assets/neonpill.svg";
import ShampooBottles from "../assets/shampoobottles.svg";
import Rapture from "../assets/rapture.svg";
import ContactMe from "../components/ContactMe";
import FooterWave from "../components/FooterWave";


const MoreAboutMe = () => {
  return (
    <div >
      <Navbar />
      <div style={{ marginTop: "4rem", marginBottom: "5rem", marginLeft: "10%" }}>
        <p style={{ fontSize: "3rem", margin: 0 }} >Hi, nice to meet you!</p>
        <p style={{ fontSize: "1.75rem" }}>My name is <span style={{ color: "#86fbfb" }}>Carlos</span> and I am a <span style={{ color: "#86fbfb" }}>Software Engineer</span></p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
        <div >
          <img
            src={personalHeadshot}
            height={350}
            alt="Personal headshot of Carlos Acosta"
          />
          <SocialIcons />
        </div>
        <div style={{ width: "35%", fontSize: 16 }}>
          <p>I am currently an undergraduate student at <a rel="noopener" target="_blank" className="link-style" href="https://www.tamu.edu/index.html" style={{ color: "#86fbfb" }}>Texas A&M University</a> pursuing a degree in Computer Science. </p>
          <p>Beyond my coursework, I am heavily involved on campus through my work as a student researcher within the <a rel="noopener" target="_blank" className="link-style" href="https://www.math.tamu.edu/" style={{ color: "#86fbfb" }}>TAMU Department of Mathematics</a>, and my leadership role as an <a style={{ color: "#86fbfb" }}>Events and Marketing Officer at Aggie Coding Club</a>.</p>
          <p>This summer, I will be interning as a <a rel="noopener" target="_blank" className="link-style" href="https://www.mastercard.us/en-us/business/issuers/grow-your-business/open-banking-solutions.html" style={{ color: "#86fbfb" }}>Software Engineer at Mastercard</a>. I will be working with the platform engineering team to build Mastercard’s developer platform and deployment systems.</p>
          <p>Outside of work, I enjoy experimenting with new technologies and working on personal projects. Currently, I am working on deploying my end-to-end encrypted chat application <a rel="noopener" target="_blank" className="link-style" href="https://github.com/aggie-coding-club/SecuroChat" style={{ color: "#86fbfb" }}>Securochat</a>! Additionally, I am working on developing a <a style={{ color: "#86fbfb" }}>Network Intrusion Detection System</a> using machine learning to interpret client network traffic in real time and response to malicious activity.</p>
          <p>On a more personal note, I am an avid swimmer, foodie, and wannabe guitarist! You can likely find me trying (and struggling) to learn music theory and binging my favorite shows! </p>
        </div>
      </div>

      <div style={{ marginTop: "7rem", marginBottom: "7rem" }}>
        <p style={{ marginLeft: "10%", fontSize: "1.75rem" }}>Currently, I am reading...</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "2rem", marginTop: "3rem"}}>
          <ContainerImage image={Cp4Book} alt="Book cover of Competitive Programming 4, Book 1, by Felix Halim, Steven Halim, and Suhendry Effend." />
          <ContainerImage image={Ddia} alt="Book cover of Designing Data-Intensive Applications, by Martin Kleppmann." />
          <ContainerImage image={Chm} alt="Book cover of Can't Hurt Me, by David Goggins." />
        </div>
      </div>

      <div style={{ marginTop: "7rem", marginBottom: "7rem" }}>
        <p style={{ marginLeft: "10%", fontSize: "1.75rem" }}>Albums on repeat...</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "2rem", marginTop: "3rem"}}>
          <ContainerImage image={NeonPill} alt="Album cover of Neon Pill by Cage the Elephant." />
          <ContainerImage image={ShampooBottles} alt="Album cover of Shampoo Bottles by Peach Pit." />
          <ContainerImage image={Rapture} alt="Album cover of Rapture by Declan Mckenna." />
        </div>
      </div>

      <ContactMe />

      <FooterWave />

    </div>
  );
};

export default MoreAboutMe;
