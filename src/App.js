import { Suspense, useState } from "react";
import AppRoutes from "./components/routes";
import SuspenseSpinner from "./components/spinner";
import PortfolioNavbar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/footer";
import { useTranslation } from "react-i18next";

function App() {
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#232944",
        dark: "#222328",
        light: "#f5f5f5",
      },
      secondary: {
        main: "#4caf50",
      },
      background: {
        default: "#C0C8CF",
      },
      text: {
        primary: "#f5f5f5",
      },
    },
  });
  return (
      <ThemeProvider theme={mainTheme}>
        <div
          style={{
            backgroundColor: mainTheme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <PortfolioNavbar />

            <Suspense fallback={<SuspenseSpinner />}>
              <AppRoutes />
            </Suspense>

          <Footer />
        </div>
      </ThemeProvider>
    )
}

export default App;
