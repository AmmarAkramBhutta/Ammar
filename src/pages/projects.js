import { motion } from "framer-motion";
import styled from "styled-components";
import {
  fade,
  pageAnimation,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import Footer from "../components/footer";
import Project from "../components/project";
import ScrollTop from "../components/ScrollTop";
import projectApi from "../project-api";

const Projects = () => {
  return (
    <>
      <Work
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="section">
          <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
          </motion.div>
          <motion.h2 variants={fade} className="centered">
            My <span className="purpled">Projects</span>.
          </motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Hide>
            <motion.div variants={photoAnimation} className="projects">
              <div className="filter">
                <div className="item_active">All</div>
                <div>UI/UX</div>
                <div>Frontend Development</div>
                <div>Backend Development</div>
                <div>Full Stack</div>
                <div>CMS</div>
              </div>
              {projectApi.map((project) => (
                <Project
                  name={project.name}
                  tags={project.tags}
                  description={project.description}
                  image={project.image}
                  key={project.name}
                  url={project.url}
                />
              ))}
            </motion.div>
          </Hide>
          <ScrollTop />
        </div>
      </Work>
      <Footer />
    </>
  );
};

const Work = styled(motion.div)`
  overflow: hidden;
  margin: 2rem 0rem 0rem;
  .section {
    padding: 0;
  }
  .line {
    height: 0.5rem;
    background: #ffc700;
    /* background: #23d997; */
    margin-bottom: 2rem;
  }
  .filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      padding: 6px;
      border: 3px solid #9b51e0;
      border-radius: 10px;
      margin: 5px;
      color: black;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
      &:hover {
        color: white;
        background-color: #9b51e0;
      }
    }

    .item_active {
      background-color: #9b51e0;
      color: white;
    }
  }

  .projects {
    width: 100%;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 15%;
  width: 100%;
  height: 100vh;
  background: #9b51e0;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #fcc700;
`;
const Frame3 = styled(Frame1)`
  background: #9b51e0;
`;
const Frame4 = styled(Frame1)`
  background: rgb(255, 199, 0);
`;

export default Projects;
