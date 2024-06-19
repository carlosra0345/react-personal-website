interface SkillIconProps {
    image: string;
    alt: string;
    iconHeight: number;
}

const SkillIcon = (props : SkillIconProps) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#223240", width: 60, height: 60, borderRadius: "50%", }}>
            <img src={props.image} alt={props.alt} height={props.iconHeight} />
        </div>
    );
};

export default SkillIcon;