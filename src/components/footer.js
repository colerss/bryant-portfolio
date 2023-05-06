import { useTranslation } from "react-i18next";
import { Typography, Box, Container, Grid } from "@mui/material";
import LanguageSelector from "../utility/language-select";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "auto",
      }}
      component="footer"
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography color="text.primary">
        <div style={{ fontSize: "0.5rem"}}>
          &#169; 2023 Portfolio Bryant Suiskens
        </div></Typography>
        <LanguageSelector />
      </Container>
    </Box>
  );
}
