import { colors } from "../constants/colors";
import SkillIcon from "./SkillIcon";
import { Link } from "react-router-dom";

interface SkillObject {
  image: string;
  alt: string;
  height: number;
}

interface ProjectTileProps {
  tileImage: string;
  tileAlt: string;
  tileTitle: string;
  startDate: string;
  endDate: string;
  tileContent: string;
  skillIcons: SkillObject[];
}

const ProjectTile = (props: ProjectTileProps) => {
  return (
    <Link
      to={"/securochat"}
      style={{
        backgroundColor: "#1a2630",
        borderRadius: 38,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#2e373e",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
        padding: 40,
        gap: 25,
        cursor: "pointer",
        textDecoration: "none",
        color: colors.white
      }}
    >
      <img src={props.tileImage} alt={props.tileAlt} height={250} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ marginBottom: 1, fontSize: 26 }}>{props.tileTitle}</p>
          <p style={{ marginBottom: 25, fontSize: 18 }}>
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.tileContent}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          {props.skillIcons.map((item, index) => (
            <SkillIcon
              key={index}
              image={item.image}
              alt={item.alt}
              iconHeight={item.height}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectTile;
