import React from "react";
import "../styles/GeneralButton.css";

interface GeneralButtonProps {
    content: string;
};

const GeneralButton = (props : GeneralButtonProps) => {
    return (
        <div className="general-button-container" >
            <p className="general-button-text" >{props.content}</p>
        </div>
    );
};

export default GeneralButton;