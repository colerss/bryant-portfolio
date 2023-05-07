import React from "react";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import TabPanel from "../components/tabPanel";
import { useTranslation } from "react-i18next";

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
              {t("Internships")}
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="internship selector"
              >
                <Tab label={t("Bachelor Internship (2023)")} />
                <Tab label={t("Graduate Internship (2021)")} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
