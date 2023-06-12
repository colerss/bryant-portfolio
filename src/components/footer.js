import { useTranslation } from "react-i18next";
import { Typography, Box, Container, Grid } from "@mui/material";
import LanguageSelector from "../utility/language-select";
import StyleSelector from "../utility/style-selector";
import { shadows } from '@mui/system';

export default function Footer({availableStyles, setSelectedStyle}) {
  console.log(availableStyles);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "auto",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)"
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
        <div>
          <Typography color="text.menu" fontSize={"0.5rem"}>
            &#169; 2023 Portfolio Bryant Suiskens
          </Typography>
        </div>
        <StyleSelector availableStyles={availableStyles} setSelectedStyle={setSelectedStyle} />
        <LanguageSelector />
      </Container>
    </Box>
  );
}
