import React from "react";
import { colors } from "../theme-styles";
import { Typography } from "@mui/material";

interface TypographyProps {
  words: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
}

function Text(props: TypographyProps) {
  const { words, fontWeight, fontSize, color } = props;
  return (
    <Typography
      style={{
        fontWeight: fontWeight || "400",
        fontSize: fontSize || "30px",
        color: color || colors.primaryNavy,
      }}
    >
      {words}
    </Typography>
  );
}

export default Text;
