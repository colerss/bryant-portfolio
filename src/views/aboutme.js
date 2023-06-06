import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TitleBox from "../components/titleBox";
import DownloadButton from "../components/downloadButton";
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
              <TitleBox title={"About Me"}></TitleBox>
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
                <Typography>{t("Biography")}</Typography>
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
                <Typography>{t("About My Hobbies")}</Typography>
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
                  {t("Relevant Documents")}
                </Typography>
                <DownloadButton
                  fileType=".pdf"
                  link="./downloads/Bryant Suiskens CV 06-23.pdf"
                  fileName="My CV"
                  downloadName="cvbryantsuiskens"
                  isPdf
                />
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
                  {t("Contact")}
                </Typography>
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <Typography variant="h6">Bryant Suiskens</Typography>
                  <Typography>{t("Phone")}: 04 92 72 41 63</Typography>
                  <Typography>Email: bryantsuiskens@gmail.com</Typography>
                  <IconButton
                    component="a"
                    href="https://github.com/colerss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com/colerss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
