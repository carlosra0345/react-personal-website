import React from "react";
import { colors } from "../constants/colors";

interface HeadingProps {
  num: number;
  title: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <div
      style={{
        fontSize: "1.75vw",
        display: "flex",
        gap: 15,
        borderBottomStyle: "solid",
        borderBottomColor: colors.darkGrey,
        borderBottomWidth: 1,
        width: "70%",
      }}
    >
      <p style={{ color: colors.aqua }}>0{props.num}.</p>
      <p>{props.title}</p>
    </div>
  );
};

export default Heading;
