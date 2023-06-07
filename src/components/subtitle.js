import React from "react";
import {  Typography } from "@mui/material";

export default function Subtitle({ children }) {
  return (
    <Typography
      variant="h5"
      noWrap
      textAlign={"center"}
      marginY={"1rem"}
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".2rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {children}
    </Typography>
  );
}
