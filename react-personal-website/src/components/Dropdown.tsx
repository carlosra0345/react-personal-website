import { useState } from "react";
import SkillIcon from "./SkillIcon";

interface SkillObject {
  image: string;
  alt: string;
  height: number;
}

interface DropdownProps {
  imageSource: string;
  imageHeight: number;
  experienceTitle: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  content: string;
  skillIcons: SkillObject[];
}

const Dropdown = (props: DropdownProps) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#1a2630",
        width: "60%",
        padding: 10,
        borderRadius: 38,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#2e373e",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 18,
        }}
      >
        <img
          style={{ width: 75 }}
          src={props.imageSource}
          alt="Mastercard Logo"
          height={props.imageHeight}
        />
        <div>
          <p style={{ margin: 0, fontSize: 26 }}>{props.experienceTitle}</p>
          <p style={{ margin: 0, fontSize: 18 }}>{props.jobTitle}</p>
          <p style={{ margin: 0, fontSize: 18 }}>
            {props.startDate} - {props.endDate}
          </p>
        </div>
        <i
          style={{
            marginLeft: "auto",
            fontSize: 36,
            marginRight: 16,
            cursor: "pointer",
          }}
          className={
            dropdownActive ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
          }
          onClick={() => setDropdownActive(!dropdownActive)}
        ></i>
      </div>

      {dropdownActive && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          <p>{props.content}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
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
      )}
    </div>
  );
};

export default Dropdown;
