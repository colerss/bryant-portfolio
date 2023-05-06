import React from "react";
import { Box, Avatar, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          margin: "1rem",
          backgroundColor: "primary.light",
          padding: "1rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>{t("Projects")}</Typography>
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
