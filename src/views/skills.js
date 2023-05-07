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
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry
                title={".NET development in C#"}
                skillLevel={"Former Specialization"}
              >
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"SQLDb Management"} skillLevel={"Experienced"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Java"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Angular"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Python"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Php"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Vue"} skillLevel={"Beginner"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Dart with Flutter"} skillLevel={"Beginner"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry
                title={".Net development in VB"}
                skillLevel={"Deprecated"}
              >
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SkillEntry title={"IoT development"} skillLevel={"Experienced"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Git"} skillLevel={"Experienced"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Salesforce"} skillLevel={"Experienced"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Cisco Networks"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"AI Programming"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"DevOps"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Itil"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>

              <SkillEntry title={"SAP"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <SkillEntry
                title={"Project Management"}
                skillLevel={"Experienced"}
              >
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Agile Management"} skillLevel={"Experienced"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Conversation Skills"} skillLevel={"Moderate"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
              <SkillEntry title={"Training"} skillLevel={"Beginner"}>
                Minim nulla id consequat duis elit. Ut elit ipsum ipsum culpa
                ipsum excepteur. Reprehenderit cupidatat commodo occaecat non
                nostrud incididunt proident amet minim laboris dolore dolore. Ea
                ipsum consectetur duis sit eiusmod Lorem ad pariatur eu irure
                irure aute nulla est. Magna enim ad id nisi tempor est
                exercitation consectetur.
              </SkillEntry>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
