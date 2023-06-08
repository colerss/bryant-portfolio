import React from "react";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import TitleBox from "../components/titleBox";
import DownloadButton from "../components/downloadButton";
import Subtitle from "../components/subtitle";
export default function InternshipPage() {
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
            <TitleBox title={"Internships"}></TitleBox>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="internship selector"
              >
                <Tab label={t("Bachelor Internship") + " (2023)"} />
                <Tab label={t("Graduate Internship") + " (2021)"} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid item xs={12}>
                <Subtitle> {t("Internship")}: VanGenechten Packaging</Subtitle>
                <Typography>{t("VGP description 1")}</Typography>
                <Typography>{t("VGP description 2")}</Typography>
                <Typography>{t("VGP description 3")}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Subtitle> {t("Assignment")}: RuleEngine</Subtitle>
                <Typography>{t("RuleEngine Project Description 1")}</Typography>
                <Typography>{t("RuleEngine Project Description 2")}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Subtitle>{t("Relevant Documents")}</Subtitle>
                <DownloadButton
                  fileType=".ppt"
                  link="./downloads/projectplanvgp.pptx"
                  fileName="Project Plan"
                  downloadName="ppruleengine"
                />
                <DownloadButton
                  fileType=".pdf"
                  link="./downloads/bsrapportvgp.pdf"
                  fileName="Full Internship report (Dutch)"
                  downloadName="vgpbryantrapport"
                  isPdf
                />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid item xs={12}>
                <Subtitle> {t("Internship")}: SoftAdvice</Subtitle>
                <Typography>{t("SoftAdvice description 1")}</Typography>
                <Typography>{t("SoftAdvice description 2")}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Subtitle>
                  {t("Assignment")}: M-Files Webportal
                </Subtitle>
                <Typography>{t("MFiles Project Description 1")}</Typography>
                <Typography>{t("MFiles Project Description 2")}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Subtitle> {t("Relevant Documents")}</Subtitle>
                <DownloadButton
                  fileType=".pdf"
                  link="./downloads/bsrapportsoftadvice.pdf"
                  fileName="Full Internship report (Dutch)"
                  downloadName="softadvicebryantreport"
                  isPdf
                />
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
