import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainAboutMe from "../components/MainAboutMe";
import TechnicalSkills from "../components/TechnicalSkills";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactMe from "../components/ContactMe";
import FooterWave from "../components/FooterWave";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainAboutMe />
      <TechnicalSkills />
      <Experience />
      <FeaturedProjects />
      <ContactMe />
      <FooterWave />
    </div>
  );
};

export default Landing;
