import SkillIcon from "./SkillIcon";
import PythonLogo from "../assets/python.svg";
import CppLogo from "../assets/cppLogo.svg";
import ReactLogo from "../assets/react-logo.svg"
import NodeLogo from "../assets/node-logo.svg";
import PostgreSQLIcon from "../assets/postgresql-icon.svg"
import GitIcon from "../assets/gitIcon.svg";
import DockerIcon from "../assets/dockerIcon.svg";
import AwsIcon from "../assets/aws-logo.svg";
import HtmlIcon from "../assets/htmlIcon.svg";
import CssIcon from "../assets/cssIcon.svg";

const SkillList = () => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={PythonLogo} alt="Python Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>Python</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={CppLogo} alt="C++ Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>C++</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={ReactLogo} alt="React Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>React</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={NodeLogo} alt="Node Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>Node</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={PostgreSQLIcon} alt="PostgreSQL Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>PostgreSQL</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={GitIcon} alt="Git Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>Git</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={DockerIcon} alt="Docker Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>Docker</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={AwsIcon} alt="AWS Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>AWS</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={HtmlIcon} alt="HTML Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>HTML</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0.45rem", textAlign: "center" }}>
                        <SkillIcon image={CssIcon} alt="CSS Logo" iconHeight={65} />
                        <p style={{ marginBottom: 7, fontSize: "2rem" }}>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillList;