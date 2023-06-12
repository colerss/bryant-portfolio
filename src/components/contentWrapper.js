import React from "react";
import { Box } from "@mui/material";
export default function ContentWrapper({ children }) {
  return (
    <Box
      sx={{
        margin: "1rem",
        backgroundColor: "primary.wrapper",
        padding: "1rem",
        borderRadius: 2, 
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)"
      }}
    >
      {children}
    </Box>
  );
}
