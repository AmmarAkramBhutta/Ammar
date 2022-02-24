import { Link } from "react-router-dom";
import styled from "styled-components";

const Project = ({ name, tags, description, image, url }) => {
  return (
    <ProjectStyle>
      <div className="section">
        <div className="main-div">
          <h4 className="project-text">Latest Work</h4>
          <div className="grid">
            <div className="title">
              <h2>{name}</h2>
              <div className="technologies__bullets">
                {tags.map((tag) => (
                  <span className="bullet" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="description">
              <p>{description}</p>
              <div className="button-border">
                <Link to={url} className="button">
                  See this project
                </Link>
              </div>
            </div>
            <div className="image">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  .grid {
    display: grid;
    grid-template-areas:
      ". image"
      "description image";
    padding-bottom: 82px;
    -webkit-box-align: center;
    align-items: center;
    grid-column-gap: 50px;
    grid-row-gap: 14px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    @media (max-width: 768px) {
      text-align: center;
      grid-template-columns: 1fr;
      grid-row-gap: 3px;
      grid-template-areas:
        "."
        "image"
        "description";
      align-items: center;
    }
  }

  .main-div {
    padding: 54px 0 82px;
  }

  .title {
    align-self: flex-start;
  }
  .image {
    grid-area: image;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }
  .description {
    grid-area: description;
  }
  p {
    max-width: 480px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 20px;
    font-family: "Abril Fatface", serif;
    font-size: 7vh;
    line-height: 137%;
    font-weight: 400;
  }

  .button-border {
    display: inline-block;
    background-color: transparent;
    box-shadow: 0 0 0 3px #000;
    transform: translate(11px, 11px);
    margin-top: 23px;
  }

  .button {
    min-width: 200px;
    border-style: solid;
    border-width: 3px;
    border-color: #000;
    background-color: #000;
    box-shadow: 0 0 0 3px #000;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    display: inline-block;
    padding: 15px 15px;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;

    transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: transform 0.3s;
    &:hover {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }
`;

export default Project;
