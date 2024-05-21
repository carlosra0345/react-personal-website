import React from "react";
import Heading from "./Heading";

const MainAboutMe = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading num={1} title={"A little about me"} />
      </div>
    </React.Fragment>
  );
};

export default MainAboutMe;
