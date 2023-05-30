import React from "react";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import TimeEntry from "../components/timeEntry";
export default function JourneyPage() {
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
              {t("Where I've Been")}
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="internship selector"
              >
                <Tab label={t("Educational Tracks")} />
                <Tab label={t("Work Experience")} />
                <Tab label={t("Certifications")} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <TimeEntry
                title={t("Bachelor Electronics/IT at Artesis-Plantijn College")}
                from={t("September") + " 2015"}
                to={t("December") + " 2017"}
              >
               {t("Bachelor AP")}
              </TimeEntry>
              <TimeEntry
                title={"Bachelor Applied Psychology at Thomas More College"}
                from={"September 2018"}
                to={"May 2019"}
              >
               {t("Bachelor Psychology")}
              </TimeEntry>
              <TimeEntry
                title={"Graduate Degree Programming at Thomas More College"}
                from={"September 2019"}
                to={"June 2021"}
              >
                {t("Graduate Programming")}
              </TimeEntry>
              <TimeEntry
                title={"Bachelor Degree Application Design at Thomas More College"}
                from={"September 2021"}
                to={"June 2023"}
              >
               {t("Bachelor Programming")}
              </TimeEntry>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TimeEntry
                title={"Certiline, 2 week internship"}
                from={"March 2015"}
              >
                {t("Certiline")}
              </TimeEntry>
              <TimeEntry
                title={"Warehouse assistant, Almet"}
                from={"February 2018"}
                to={"May 2018"}
              >
                {t("Almet")}
              </TimeEntry>
              <TimeEntry
                title={"ASP.NET Programmer, SoftAdvice"}
                from={"February 2021"}
                to={"May 2021"}
              >
                {t("SoftAdvice")}
              </TimeEntry>
              <TimeEntry
                title={"React Programmer, VanGenechten"}
                from={"February 2023"}
                to={"May 2023"}
              >
                {t("VanGenechten")}
              </TimeEntry>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <TimeEntry
                title={"Unity Junior Developer"}
                from={"December 2020"}
              >
                {t("Unity Junior")}
              </TimeEntry>
              <TimeEntry
                title={"DRUPAL 10 & 9 TUTORIAL - Drupal Master Class"}
                from={"January 2023"}
              >
                https://www.udemy.com/certificate/UC-77afa11f-49a6-49b9-9744-e2e36e914e4c/
                {t("Drupal Dev")}
              </TimeEntry>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
