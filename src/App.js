import { Route, Routes } from "react-router";
import GlobalStyle from "./components/global-style";
import Nav from "./components/nav";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import ProjectDetail from "./pages/project-detail";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
