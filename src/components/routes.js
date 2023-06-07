import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { lazy, useEffect } from "react";
const AboutMePage = lazy(() => import("../views/aboutme"));
const InternshipPage = lazy(() => import("../views/internship"));
const ProjectsPage = lazy(() => import("../views/projects"));
const SkillsPage = lazy(() => import("../views/skills"));
const JourneyPage = lazy(() => import("../views/journey"));
const HomePage = lazy(() => import("../views/home"));

export default function AppRoutes() {
  const location = useLocation();

  //Necessary fix for a bug that causes i18n to lag on initialization
  useEffect(() => {
    if (location.pathname === "/") {
      window.location.reload();
      window.location.href = "/bryant-portfolio/home";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/bryant-portfolio/" exact  element={<HomePage />} />
      <Route path="/bryant-portfolio/home"  element={<HomePage />} />
      <Route path="/bryant-portfolio/aboutme" element={<AboutMePage />} />
      <Route path="/bryant-portfolio/journey" element={<JourneyPage />} />
      <Route path="/bryant-portfolio/projects" element={<ProjectsPage />} />
      <Route path="/bryant-portfolio/skills" element={<SkillsPage />} />
      <Route path="/bryant-portfolio/internship" element={<InternshipPage />} />
    </Routes>
  );
}
