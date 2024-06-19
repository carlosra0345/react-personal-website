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
        display: "flex",
        alignItems: "center",
        gap: 15,
        borderBottomStyle: "solid",
        borderBottomColor: colors.darkGrey,
        borderBottomWidth: 1,
        width: "70%",
        marginBottom: "4rem",
      }}
    >
      <p style={{ color: colors.aqua, fontSize: "2vw" }}>0{props.num}.</p>
      <p style={{ fontSize: "2vw" }}>{props.title}</p>
    </div>
  );
};

export default Heading;
