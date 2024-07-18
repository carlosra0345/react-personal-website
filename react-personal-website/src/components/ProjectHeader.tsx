
interface ProjectHeaderProps {
    image: string;
    projectTitle: string;
    description: string;
    role: string;
    timeframe: string;
};

const ProjectHeader = (props: ProjectHeaderProps) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {/* <img src={props.image} alt="Animation of using Securochat"  /> */}
            <div style={{ display: "flex", justifyContent: "center",  gap: "10%", marginTop: "5rem" }}>
                <div style={{ width: "35%" }}>
                    <p style={{ color: "#86fbfb", fontSize: "2.5rem", marginBottom: 10 }}>{props.projectTitle}</p>
                    <p >{props.description}</p>
                </div>
                <div>
                    <div>
                        <p style={{ color: "#86fbfb", fontSize: "2rem", marginBottom: 10 }}>Role</p>
                        <p >{props.role}</p>
                    </div>
                    <div>
                        <p style={{ color: "#86fbfb", fontSize: "2rem", marginBottom: 10 }}>Timeframe</p>
                        <p >{props.timeframe}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;