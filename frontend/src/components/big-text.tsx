import React from "react";
import { colors } from "../theme-styles";
import { Typography } from "@mui/material";

interface BigTextProps {
  words: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  transform?: string;
  fontStyle?: string;
}

function BigText(props: BigTextProps) {
  const { words, fontWeight, fontSize, color, transform, fontStyle } = props;
  return (
    <Typography
      style={{
        fontWeight: fontWeight || "700",
        color: color || colors.primaryNavy,
        fontSize: fontSize || "1.5em",
        transform: transform || "scale(1, 1.5)",
        textAlign: "left",
        fontStyle: fontStyle || "normal",
      }}
    >
      {words}
    </Typography>
  );
}

export default BigText;
