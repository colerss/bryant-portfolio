import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContentWrapper from "./contentWrapper";

export default function ProjectEntry({ title, from, to, children, hidden , imageGallery}) {
  const { t, i18n } = useTranslation();
  return (
    <div
      style={{
        display: hidden ? "none" : "block",
        margin: "0px",
        padding: "0px",
      }}
    >
      <ContentWrapper>
        <Grid container spacing={2}>
          <Grid item  sx={{ display: { xs: "none", md: "block" } }} md={4}>{imageGallery}</Grid>
          <Grid item xs={12} md={8}>
            <h3>{title}</h3>
            <span>
              {from} - {to}
            </span>
            {children}
          </Grid>
        </Grid>
      </ContentWrapper>
    </div>
  );
}
