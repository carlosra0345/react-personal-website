import Mastercard from "../assets/mastercard.svg";

interface DropdownProps {
    imageSource: string;
    experienceTitle: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    content: string;
    skillIcons: string[];
};

const Dropdown = () => {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#1a2630", width: "50%", padding: 10, }}>
            <img src={Mastercard} alt="Mastercard Logo" height={50} />
            <div>
                <p style={{margin: 0, fontSize: 26,}}>Mastercard</p>
                <p style={{margin: 0, fontSize: 18,}}>Software Engineer Intern</p>
                <p style={{margin: 0, fontSize: 18,}}>June 2024 - Present</p>
            </div>
        </div>
    );
};

export default Dropdown;