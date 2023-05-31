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
                <Route path="/home" element={<HomePage />} />
                <Route path="/aboutme" element={<AboutMePage />}  />
                <Route path="/journey" element={<JourneyPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/skills" element={<SkillsPage />}/>
                <Route path="/internship" element={<InternshipPage/>} />
            </Routes>
        )

}