import React from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";
import TabPanel from '../components/tabPanel';
import { useTranslation } from "react-i18next";

export default function InternshipPage() {
  const [value, setValue] = React.useState(0);
  const {t, i18n} = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{margin: "1rem", backgroundColor: "primary.light"}}>
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
    </Container>
  );
}
