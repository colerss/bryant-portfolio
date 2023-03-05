import { Suspense, useState } from "react";
import AppRoutes from "./components/routes";
import SuspenseSpinner from "./components/spinner";
import PortfolioNavbar from "./components/navbar";


function App() {
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <Suspense  fallback={<SuspenseSpinner />} >
          <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;
