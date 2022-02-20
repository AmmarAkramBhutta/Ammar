import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projectApi from "../project-api";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name} />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  padding-top: 10px;
`;

export default ProjectDetail;
