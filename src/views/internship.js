import React from "react";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";
import TitleBox from "../components/titleBox";
import DownloadButton from "../components/downloadButton";
import Subtitle from "../components/subtitle";
import ContentWrapper from "../components/contentWrapper";
import SimpleAccordion from "../components/accordion";
import ImageGallery from "../components/imageGallery";

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
          <TitleBox title={"Internships"}></TitleBox>
          <ContentWrapper>
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
                  label={t("Bachelor Internship") + " (2023)"}
                />
                <Tab
                  sx={{
                    color: "text.default",
                    "&.Mui-selected": {
                      color: "text.default",
                    },
                  }}
                  label={t("Graduate Internship") + " (2021)"}
                />
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
              <Grid item xd={12}>
                <Subtitle>{t("Proofs")}:</Subtitle>

                <SimpleAccordion title={"RuleEngine"}>
                  <ImageGallery
                    quilted
                    path={"./images/vgpnew"}
                    rowHeight={100}
                    pathLimit={11}
                  ></ImageGallery>
                </SimpleAccordion>
                <SimpleAccordion title={"Other Proofs"}>
                  <ImageGallery
                    quilted
                    path={"./images/vgpother"}
                    rowHeight={100}
                    pathLimit={10}
                  ></ImageGallery>
                </SimpleAccordion>
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
                <Subtitle>{t("Assignment")}: M-Files Webportal</Subtitle>
                <Typography>{t("MFiles Project Description 1")}</Typography>
                <Typography>{t("MFiles Project Description 2")}</Typography>
              </Grid>
              <Grid item xd={12}>
                <Subtitle>{t("Proofs")}:</Subtitle>

                <SimpleAccordion title={"MFiles Webportal"}>
                  <ImageGallery
                    quilted
                    path={"./images/mfiles"}
                    rowHeight={100}
                    pathLimit={3}
                  ></ImageGallery>
                </SimpleAccordion>
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
          </ContentWrapper>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
