import styled from "styled-components";
import home1 from "../img/main-image.png";

const AboutSection = () => {
  return (
    <>
      <About>
        <div className="description">
          <div className="title">
            <div className="hide">
              <h1>Ammar Akram</h1>
            </div>
            <div className="hide">
              <span className="full-stack">Full Stack Developer</span>
            </div>
          </div>
          <p>
            I design and build websites for businesses around the globe. If you
            need a modern and powerful website, send me an email.
          </p>
        </div>
        <div className="image">
          <img src={home1} alt="Ammar Akram" className="main-image" />
        </div>
      </About>
    </>
  );
};

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    padding-bottom: 5px;
  }

  .description {
    max-width: 446px;
  }

  p {
    padding-top: 20px;
  }
  .main-image {
    max-width: 545px;
    transform: translateX(-40px);
  }

  .full-stack {
    position: relative;
    padding: 7px 0.03125em;
    white-space: nowrap;
    font-weight: bold;
    font-size: 30px;
    width: auto;
  }

  .full-stack::after {
    content: "";
    position: absolute;
    inset: 0.328125em -0.125em 0.109375em;
    background: rgb(255, 199, 0);
    border-radius: 0.03125em;
    z-index: -1;
  }
`;

export default AboutSection;
