import { Suspense, useState } from "react";
import AppRoutes from "./components/routes";
import SuspenseSpinner from "./components/spinner";
import PortfolioNavbar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/footer";
import { useTranslation } from "react-i18next";

const availableStyles = {
  default: createTheme({
    palette: {
      primary: {
        main: "#232944",
        menu: "#222328",
        wrapper: "#f5f5f5",
      },
      secondary: {
        main: "#4caf50",
      },
      background: {
        home: "#2196f3",
      },
      text: {
        default: "#000000",
        light: "#f5f5f5",
        dark: "#000000",
        secondary: "#f5f5f5",
        background: "#f5f5f5",
        menu: "#f5f5f5"
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#F5F5F5",
        wrapper: "#fffafb",
      },
      secondary: {
        main: "#03fcec",
      },
      background: {
        home: "#FFFFFF",
      },
      text: {
        default: "#000000",
        light: "#ffffff",
        dark: "#000000",
        secondary: "#000000",
        background: "#000000",
        menu: "#000000"
      },
    },
  }),
  dark: createTheme({
    palette: {
      primary: {
        main: "#090f1f",
        wrapper: "#303632",
      },
      secondary: {
        main: "#086125",
      },
      background: {
        home: "#000000",
      },
      text: {
        default: "#f5f5f5",
        light: "#f5f5f5",
        dark: "#000000",
        secondary: "#ffffff",
        background: "#f5f5f5",
        menu: "#f5f5f5"
      },
    },
  }),
  colorful: createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        wrapper: "#63a4ff",
      },
      secondary: {
        main: "#f20236",
      },
      background: {
        home: "#ff4081",
      },
      text: {
        default: "#000000",
        light: "#FFFFFF",
        dark: "#000000",
        secondary: "#FFFFFF",
        background: "#f5f5f5",
        menu: "#f5f5f5"
      },
    },
  }),
};

function App() {
  const [selectedStyle, setSelectedStyle] = useState(
    availableStyles["default"]
  );
  return (
    <ThemeProvider theme={selectedStyle}>
      <div
        style={{
          backgroundColor: selectedStyle.palette.background.home,
          color: selectedStyle.palette.text.default,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <PortfolioNavbar />

        <Suspense fallback={<SuspenseSpinner />}>
          <AppRoutes />
        </Suspense>

        <Footer
          availableStyles={availableStyles}
          setSelectedStyle={setSelectedStyle}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
