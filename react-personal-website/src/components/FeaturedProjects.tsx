import Heading from "./Heading";
import ProjectTile from "./ProjectTile";
import SecurochatSquareLogo from "../assets/securochat-square-logo.svg";
import NodeLogo from "../assets/node-logo.svg";
import ReactLogo from "../assets/react-logo.svg";
import AWSLogo from "../assets/aws-logo.svg";
import PostgresqlLogo from "../assets/postgresql-icon.svg";

const FeaturedProjects = () => {
  return (
    <div id="projects" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading num={3} title="Featured Projects" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProjectTile
          tileImage={SecurochatSquareLogo}
          tileAlt="Securochat project logo"
          tileTitle="Securochat"
          startDate="August 2023"
          endDate="Present"
          tileContent="An end-to-end Encrypted real-time, mobile chat application ensuring secure communication between users."
          skillIcons={[
            { image: ReactLogo, alt: "React.js Logo", height: 35 },
            { image: NodeLogo, alt: "Node.js Logo", height: 35 },
            { image: AWSLogo, alt: "AWS Logo", height: 35 },
            { image: PostgresqlLogo, alt: "Postgresql Logo", height: 35 },
          ]}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
