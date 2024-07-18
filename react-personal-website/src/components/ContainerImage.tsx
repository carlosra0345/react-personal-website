interface ContainerImageProps {
    image: string;
    alt: string;
};

const ContainerImage = (props : ContainerImageProps) => {
    return (
        <div style={{ backgroundColor: "#1A2630", borderRadius: 18, padding: 25, cursor: "pointer"}}>
            <img src={props.image} alt={props.alt} width={165}/>
        </div>
    );
};

export default ContainerImage;