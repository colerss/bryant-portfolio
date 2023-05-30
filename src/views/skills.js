import React from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import SkillEntry from "../components/skillEntry";
export default function SkillsPage() {
  const [value, setValue] = React.useState(0);
  const { t, i18n } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ margin: "1rem", backgroundColor: "primary.light" }}>
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
              {t("My Skills")}
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="internship selector"
              >
                <Tab label={t("Programming Skills")} />
                <Tab label={t("IT Skills")} />
                <Tab label={t("Soft Skills")} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <SkillEntry
                title={"Javascript React"}
                skillLevel={"Specialization"}
              >
               {t("React Experience")}
              </SkillEntry>
              <SkillEntry
                title={".NET development in C#"}
                skillLevel={"Former Specialization"}
              >
               {t("DotNet Experience")}
              </SkillEntry>
              <SkillEntry title={"SQLDb Management"} skillLevel={"Experienced"}>
               {t("SQLDb Experience")}
              </SkillEntry>
              <SkillEntry title={"Java"} skillLevel={"Moderate"}>
                {t("Java Experience")}
              </SkillEntry>
              <SkillEntry title={"Angular"} skillLevel={"Moderate"}>
                {t("Angular Experience")}
              </SkillEntry>
              <SkillEntry title={"Python"} skillLevel={"Moderate"}>
               {t("Python Experience")}
              </SkillEntry>
              <SkillEntry title={"Php"} skillLevel={"Moderate"}>
              {t("PHP Experience")}
              </SkillEntry>
              <SkillEntry title={"Vue"} skillLevel={"Beginner"}>
               {t("Vue Experience")}
              </SkillEntry>
              <SkillEntry title={"Dart with Flutter"} skillLevel={"Beginner"}>
              {t("Dart Experience")}
              </SkillEntry>
              <SkillEntry
                title={".Net development in VB"}
                skillLevel={"Deprecated"}
              >
               {t("VB Experience")}
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SkillEntry title={"IoT development"} skillLevel={"Experienced"}>
                {t("IOT Experience")}
              </SkillEntry>
              <SkillEntry title={"Git"} skillLevel={"Experienced"}>
               {t("Git Experience")}
              </SkillEntry>
              <SkillEntry title={"Salesforce"} skillLevel={"Experienced"}>
                {t("SalesForce Experience")}
              </SkillEntry>
              <SkillEntry title={"Cisco Networks"} skillLevel={"Moderate"}>
                {t("Cisco Experience")}
              </SkillEntry>
              <SkillEntry title={"AI Programming"} skillLevel={"Moderate"}>
                {t("AI Experience")}
              </SkillEntry>
              <SkillEntry title={"DevOps"} skillLevel={"Moderate"}>
                {t("DevOps Experience")}
              </SkillEntry>
              <SkillEntry title={"Itil"} skillLevel={"Moderate"}>
               {t("ITIL Experience")}
              </SkillEntry>
              <SkillEntry title={"Electronics"} skillLevel={"Moderate"}>
              {t("Electronics Experience")}
              </SkillEntry>
              <SkillEntry title={"SAP"} skillLevel={"Beginner"}>
               {t("SAP Experience")}
              </SkillEntry>
              <SkillEntry title={"Drupal"} skillLevel={"Beginner"}>
                {t("Drupal Experience")}
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SkillEntry
                title={"Project Management"}
                skillLevel={"Experienced"}
              >
                {t("Project Management Experience")}
              </SkillEntry>
              <SkillEntry title={"Agile Management"} skillLevel={"Experienced"}>
                {t("Agile Experience")}
              </SkillEntry>
              <SkillEntry title={"Conversation Skills"} skillLevel={"Moderate"}>
                {t("Conversation Experience")}
              </SkillEntry>
              <SkillEntry title={"Training"} skillLevel={"Beginner"}>
                {t("Training Experience")}
              </SkillEntry>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
