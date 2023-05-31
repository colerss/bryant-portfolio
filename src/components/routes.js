import { Routes, Route} from "react-router-dom";
import { lazy } from "react";
const AboutMePage = lazy(() => import("../views/aboutme"));
const InternshipPage = lazy(() => import("../views/internship"));
const ProjectsPage = lazy(() => import("../views/projects"));
const SkillsPage = lazy(() => import("../views/skills"));
const JourneyPage = lazy(() => import("../views/journey"));
const HomePage = lazy(()=> import("../views/home"));

export default function AppRoutes(){
        return (
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/bryant-portfolio/" exact element={<HomePage />} />
                <Route path="/bryant-portfolio/aboutme" element={<AboutMePage />}  />
                <Route path="/bryant-portfolio/journey" element={<JourneyPage />} />
                <Route path="/bryant-portfolio/projects" element={<ProjectsPage />} />
                <Route path="/bryant-portfolio/skills" element={<SkillsPage />}/>
                <Route path="/bryant-portfolio/internship" element={<InternshipPage/>} />
            </Routes>
        )

}