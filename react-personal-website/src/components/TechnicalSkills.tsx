import Heading from "./Heading";
import SkillList from "./SkillList";
const TechnicalSkills = () => {
    return (
        <div id="experience" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Heading num={2} title="Skills" />
            </div>
            <SkillList />
        </div>
    )
}

export default TechnicalSkills;