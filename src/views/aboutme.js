import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TitleBox from "../components/titleBox";
import DownloadButton from "../components/downloadButton";
import Subtitle from "../components/subtitle";
import ContentWrapper from "../components/contentWrapper";
import ImageGallery from "../components/imageGallery";

export default function AboutMePage() {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <TitleBox title={"About Me"}></TitleBox>
          <ContentWrapper>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <img
                  src="./images/profile.jpg"
                  alt="Bryant Suiskens"
                  style={{
                    borderRadius: "100%",
                    objectFit: "contain",
                    maxWidth: "100%",
                    clipPath: "circle(100% at 50% 30%)",
                    opacity: 0,
                    transition: "opacity 0.5s ease-in-out",
                    boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                  }}
                  onLoad={(e) => {
                    e.target.style.opacity = 1;
                  }}
                />
              </Grid>
              <Grid item xs={12}md={9}>
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
                <Subtitle> {t("Relevant Documents")}</Subtitle>
                <DownloadButton
                  fileType=".pdf"
                  link="./downloads/Bryant Suiskens CV 06-23.pdf"
                  fileName="My CV"
                  downloadName="cvbryantsuiskens"
                  isPdf
                />
              </Grid>
              <Grid item xs={12}>
                <Subtitle>{t("Contact")}</Subtitle>
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
                    href="https://www.linkedin.com/in/bryant-suiskens-69558b11b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </ContentWrapper>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
