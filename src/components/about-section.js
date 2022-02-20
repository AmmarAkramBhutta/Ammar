import { motion } from "framer-motion";
import styled from "styled-components";
import { photoAnimation, titleAnimation } from "../animation";
import home1 from "../img/main-image.png";
import Wave from "./wave";

const AboutSection = () => {
  return (
    <>
      <About>
        <Wave />
        <div>
          <div className="title">
            <div>
              <motion.h1 variants={titleAnimation}>Ammar Akram</motion.h1>
            </div>
            <motion.div variants={titleAnimation}>
              <span className="full-stack">Full Stack Developer</span>
            </motion.div>
          </div>
          <motion.p variants={titleAnimation}>
            I design and build websites for businesses around the globe. If you
            need a modern and powerful website, send me an email.
          </motion.p>
        </div>
        <div className="image">
          <motion.img
            variants={photoAnimation}
            src={home1}
            alt="Ammar Akram"
            className="main-image"
          />
        </div>
      </About>
    </>
  );
};

export const About = styled(motion.div)`
  min-height: 90vh;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;

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
