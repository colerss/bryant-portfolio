import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TitleBox({
  title,
  width = 12
}) {
  const { t, i18n } = useTranslation();
  return (
    <Grid item xs={width}>
      <Typography
        variant="h4"
        noWrap
        textAlign={"center"}
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "underline",
        }}
      >
        {t(title)}
      </Typography>
    </Grid>
  );
}
