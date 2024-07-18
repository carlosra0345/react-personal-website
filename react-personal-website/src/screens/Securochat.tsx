import Navbar from "../components/Navbar";
import ProjectHeader from "../components/ProjectHeader";
import SecurochatImage from "../assets/securochat-square-logo.svg";
import AppStore from "../assets/appstore.svg";
import GoogleStore from "../assets/googleplay.svg";

const Securochat = () => {
    return (
        <div>
            <Navbar />

            <ProjectHeader
                image={SecurochatImage}
                projectTitle="Securochat: Private Messenger"
                description="SecuroChat is an end-to-end Encrypted real-time, mobile chat application ensuring secure communication between users."
                role="Lead Developer and Project Manager"
                timeframe="August 2023 - Present"
            />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}>
                <img src={AppStore} alt="Download on the App Store." style={{ height: 65, cursor: "pointer" }} />
                <img src={GoogleStore} alt="Download on the Google Play Store." style={{ height: 180, cursor: "pointer" }} />
            </div>

            <p style={{ color: "#86fbfb", fontSize: "2.5rem", marginLeft: "17%" }}>Tools and Technologies</p>
        </div>
    );
};

export default Securochat;