import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjectEntry({
  title,
  from,
  to,
  children,
  hidden
}) {
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        display: hidden ? "none" : "block",
        margin: "1rem",
        backgroundColor: "primary.light",
        padding: "1rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <h3>{title}</h3>
          <span>
            {from} - {to}
          </span>
         {children}
        </Grid>
      </Grid>
    </Box>
  );
}
