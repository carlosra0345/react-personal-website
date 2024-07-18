import "../styles/GeneralButton.css";
import { Link } from "react-router-dom";

interface GeneralButtonProps {
  content: string;
  link: string;
}

const GeneralButton = (props: GeneralButtonProps) => {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className="general-button-container">
        <p className="general-button-text">{props.content}</p>
      </div>
    </Link>
  );
};

export default GeneralButton;
