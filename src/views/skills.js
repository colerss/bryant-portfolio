import React from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import SkillEntry from "../components/skillEntry";
import TitleBox from "../components/titleBox";
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
          <Box
            sx={{
              margin: "1rem",
              backgroundColor: "primary.wrapper",
              padding: "1rem",
            }}
          >
            <TitleBox title={"My Skills"}></TitleBox>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="internship selector"
              >
                <Tab
                  sx={{
                    color: "text.default",
                    "&.Mui-selected": {
                      color: "text.default",
                    },
                  }}
                  label={t("Programming Skills")}
                />
                <Tab
                  sx={{
                    color: "text.default",
                    "&.Mui-selected": {
                      color: "text.default",
                    },
                  }}
                  label={t("IT Skills")}
                />
                <Tab
                  sx={{
                    color: "text.default",
                    "&.Mui-selected": {
                      color: "text.default",
                    },
                  }}
                  label={t("Soft Skills")}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <SkillEntry
                title={"Javascript React"}
                skillLevel={t("Specialist")}
              >
                {t("React Experience")}
              </SkillEntry>
              <SkillEntry
                title={t(".NET Development in C#")}
                skillLevel={t("Former Specialist")}
              >
                {t("DotNet Experience")}
              </SkillEntry>
              <SkillEntry
                title={"SQLDb Management"}
                skillLevel={t("Experienced")}
              >
                {t("SQLDb Experience")}
              </SkillEntry>
              <SkillEntry title={"Java"} skillLevel={t("Moderate")}>
                {t("Java Experience")}
              </SkillEntry>
              <SkillEntry title={"Angular"} skillLevel={t("Moderate")}>
                {t("Angular Experience")}
              </SkillEntry>
              <SkillEntry title={"Python"} skillLevel={t("Moderate")}>
                {t("Python Experience")}
              </SkillEntry>
              <SkillEntry title={"Php"} skillLevel={t("Moderate")}>
                {t("PHP Experience")}
              </SkillEntry>
              <SkillEntry title={"Vue"} skillLevel={t("Beginner")}>
                {t("Vue Experience")}{" "}
                <a href=" https://openclassrooms.com/en/courses/5664336-create-a-web-application-with-vue-js">
                  Course
                </a>
              </SkillEntry>
              <SkillEntry title={"Dart + Flutter"} skillLevel={t("Beginner")}>
                {t("Dart Experience")}
              </SkillEntry>
              <SkillEntry
                title={".Net development in VB"}
                skillLevel={t("Deprecated")}
              >
                {t("VB Experience")}
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SkillEntry
                title={t("IoT Development")}
                skillLevel={t("Experienced")}
              >
                {t("IOT Experience")}
              </SkillEntry>
              <SkillEntry title={"Git"} skillLevel={t("Experienced")}>
                {t("Git Experience")}
              </SkillEntry>
              <SkillEntry title={"Salesforce"} skillLevel={t("Experienced")}>
                {t("SalesForce Experience")}
              </SkillEntry>
              <SkillEntry
                title={t("Cisco Networks")}
                skillLevel={t("Moderate")}
              >
                {t("Cisco Experience")}
              </SkillEntry>
              <SkillEntry title={"AI Programming"} skillLevel={t("Moderate")}>
                {t("AI Experience")}
              </SkillEntry>
              <SkillEntry title={"DevOps"} skillLevel={t("Moderate")}>
                {t("DevOps Experience")}
              </SkillEntry>
              <SkillEntry title={"Itil"} skillLevel={t("Moderate")}>
                {t("ITIL Experience")}
              </SkillEntry>
              <SkillEntry title={t("Electronics")} skillLevel={t("Moderate")}>
                {t("Electronics Experience")}
              </SkillEntry>
              <SkillEntry title={"SAP"} skillLevel={t("Moderate")}>
                {t("SAP Experience")}
              </SkillEntry>
              <SkillEntry title={"Drupal"} skillLevel={t("Moderate")}>
                {t("Drupal Experience")}
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SkillEntry
                title={"Project Management"}
                skillLevel={t("Experienced")}
              >
                {t("Project Management Experience")}
              </SkillEntry>
              <SkillEntry
                title={"Agile Management"}
                skillLevel={t("Experienced")}
              >
                {t("Agile Experience")}
              </SkillEntry>
              <SkillEntry
                title={t("Conversation Skills")}
                skillLevel={t("Moderate")}
              >
                {t("Conversation Experience")}
              </SkillEntry>
              <SkillEntry title={"Training"} skillLevel={t("Beginner")}>
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
