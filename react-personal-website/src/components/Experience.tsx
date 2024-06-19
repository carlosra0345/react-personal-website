import Heading from "../components/Heading";
import Dropdown from "./Dropdown";

const Experience = () => {
    return (
        <div style={{ marginBottom: "10rem", }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Heading num={2} title="Work Experience" />
            </div>
            
            <Dropdown />
        </div>


    );
};


export default Experience;