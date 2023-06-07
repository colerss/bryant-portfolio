import React from "react";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import TimeEntry from "../components/timeEntry";
import TitleBox from "../components/titleBox";
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
          <Box sx={{ margin: "1rem", backgroundColor: "primary.light",   padding: "1rem" }}>
            <TitleBox title={"Where I've Been"}></TitleBox>
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
                title={t("AP IT Bachelor")}
                from={t("September") + " 2015"}
                to={t("December") + " 2017"}
              >
               {t("Bachelor AP")}
              </TimeEntry>
              <TimeEntry
                title={t("TM TP Bachelor")}
                from={t("September")+ " 2018"}
                to={t("May") + " 2019"}
              >
               {t("Bachelor Psychology")}
              </TimeEntry>
              <TimeEntry
                title={t("TM IT Graduate")}
                from={t("September")+ "2019"}
                to={t("June")+ " 2021"}
              >
                {t("Graduate Programming")}
              </TimeEntry>
              <TimeEntry
                title={t("TM IT Bachelor")}
                from={t("September")+ " 2021"}
                to={t("June")+ " 2023"}
              >
               {t("Bachelor Programming")}
              </TimeEntry>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TimeEntry
                title={"Certiline"}
                from={t("March")+ " 2015"}
              >
                {t("Certiline")}
              </TimeEntry>
              <TimeEntry
                title={t("Warehouse Assistant") + ", Almet"}
                from={t("February")+ " 2018"}
                to={t("May")+ " 2018"}
              >
                {t("Almet")}
              </TimeEntry>
              <TimeEntry
                title={"ASP.NET Programmer, SoftAdvice"}
                from={t("February")+ " 2021"}
                to={t("May")+ " 2021"}
              >
                {t("SoftAdvice")}
              </TimeEntry>
              <TimeEntry
                title={t("React Programmer") + ", VanGenechten"}
                from={t("February")+ " 2023"}
                to={t("May")+ " 2023"}
              >
                {t("VanGenechten")}
              </TimeEntry>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <TimeEntry
                title={"Unity Junior Developer"}
                from={t("November")+ " 2020"}
              >
                {t("Unity Junior")}
              </TimeEntry>
              <TimeEntry
                title={"DRUPAL 10 & 9 TUTORIAL - Drupal Master Class"}
                from={t("January")+ " 2023"}
              >
               
                {t("Drupal Certificate")} <a href="https://www.udemy.com/certificate/UC-77afa11f-49a6-49b9-9744-e2e36e914e4c/">Official Certificate</a>
              </TimeEntry>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
