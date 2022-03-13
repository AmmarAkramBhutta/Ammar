import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import projectApi from "../project-api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Footer from "../components/footer";
import SayHi from "../components/say-hi";

const ProjectDetail = () => {
  const location = useLocation();

  const url = location.pathname;
  const [projects, setProjects] = useState(projectApi);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((p) => url === p.url);

    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <div>
          <Details
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="section">
              <div className="container">
                <div className="description">
                  <h4 className="project-text">Project showcase</h4>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" alt="project link">
                    visit this project →
                  </a>
                </div>
                <img src={project.image} alt={project.name} className="image" />
              </div>
            </div>
          </Details>
          <SayHi />
          <Footer />
        </div>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  padding-top: 70px;

  .container {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .description {
    max-width: 700px;
  }
  p {
    margin: 20px 0;
  }
  .image {
    max-width: 800px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  a {
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
    box-shadow: inset 0 -11px 0 0 #fcc700;
    -webkit-transition: box-shadow 0.4s ease;
    transition: all 0.4s ease;
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin-bottom: 35px;
  }

  a:hover {
    box-shadow: inset 0 -21px 0 0 #fcc700;
  }
  a:active {
    opacity: 0.9;
  }
`;

export default ProjectDetail;
