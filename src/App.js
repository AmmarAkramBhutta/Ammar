import { Route, Routes } from "react-router";
import GlobalStyle from "./components/global-style";
import Nav from "./components/nav";
import AboutUs from "./pages/about-us";
import ProjectDetail from "./pages/projects-detail";
import Projects from "./pages/projects";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />

          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
