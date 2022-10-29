import React from "react";
import { colors } from "../theme-styles";
import { Typography } from "@mui/material";

interface TypographyProps {
  words: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  transform?: string;
}

function Text(props: TypographyProps) {
  const { words, fontWeight, fontSize, color, transform } = props;
  return (
    <Typography
      style={{
        fontWeight: fontWeight || "400",
        color: color || colors.primaryNavy,
        fontSize: fontSize || "1.5em",
        transform: transform || "scale(1, 1.5)",
      }}
    >
      {words}
    </Typography>
  );
}

export default Text;
