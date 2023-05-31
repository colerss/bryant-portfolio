import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function AboutMePage() {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              margin: "1rem",
              backgroundColor: "primary.light",
              padding: "1rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                  {t("About me")}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <img
                  src="./images/profile.jpg"
                  alt="Bryant Suiskens"
                  style={{
                    borderRadius: "0%",
                    objectFit: "contain",
                    maxWidth: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography>Bryant Suiskens</Typography>
                <Typography>
                  {t("Born")}: 1996, {t("October 15th")}
                </Typography>
                <br />
                <Typography>
                  {t("Biography")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  noWrap
                  textAlign={"center"}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {t("My Hobbies")}
                </Typography>
                <Typography>
                  {t("About My Hobbies")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
