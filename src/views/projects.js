import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TitleBox from "../components/titleBox";
import ProjectEntry from "../components/projectEntry";
import ContentWrapper from "../components/contentWrapper";
import ImageGallery from "../components/imageGallery";
export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <TitleBox title={"My Projects"} />
          <ProjectEntry
            title={"VGP RuleEngine"}
            from="February 2023"
            to="July 2023"
            hidden
          >
            <p>{t("RuleEngine Project Description 1")}</p>
            <p>{t("RuleEngine Project Description 2")}</p>
          </ProjectEntry>
          <ProjectEntry
            title={"CodeFarm"}
            from="September 2022"
            to="February 2023"
            imageGallery={
              <ImageGallery
                quilted
                path={"./images/codefarm"}
                rowHeight={100}
                pathLimit={4}
              ></ImageGallery>
            }
          >
            <p>{t("CodeFarm Project Description 1")}</p>
            <p>{t("CodeFarm Project Description 2")}</p>
          </ProjectEntry>
          <ProjectEntry
            title={"SalesForce Deloitte "}
            from="October 2022"
            to="November 2023"
            imageGallery={
              <ImageGallery
                quilted
                path={"./images/salesforce"}
                rowHeight={120}
                pathLimit={2}
              ></ImageGallery>
            }
          >
            <p>{t("SalesForce Deloitte Project Description 1")}</p>
          </ProjectEntry>
          <ProjectEntry
            hidden
            title={"M-Files Webportal"}
            from="March 2021"
            to="June 2021"
          >
            <p>{t("MFiles Project Description 1")}</p>
            <p>{t("MFiles Project Description 2")}</p>
          </ProjectEntry>
          <ProjectEntry
            title={"GemTD"}
            from={t("September")+ " 2020"}
            to={t("October")+ " 2020"}
            imageGallery={
              <ImageGallery
                quilted
                path={"./images/gemtd"}
                rowHeight={100}
                pathLimit={3}
              ></ImageGallery>
            }
          >
            <p>{t("GemTD Project Description 1")}</p>
            <p>
              {t("GemTD Project Description 2")}{" "}
              <a href="https://colers.itch.io/gem-td-remade">
                Link to the game
              </a>
            </p>
          </ProjectEntry>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
