import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <Work>
        <Project>
          <h2>The Project Topic</h2>
          <div className="line"></div>
          <div className="projects"></div>
        </Project>
      </Work>
      our work
    </>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #000;
    margin-bottom: 3rem;
  }
  .projects {
    width: 100%;
    height: 70vh;
  }
`;

export default Projects;
