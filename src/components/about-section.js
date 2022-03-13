import { motion } from "framer-motion";
import styled from "styled-components";
import { photoAnimation, titleAnimation } from "../animation";
import home1 from "../img/main-image.png";
import Wave from "./wave";

const AboutSection = () => {
  return (
    <About>
      <Wave />
      <div className="section">
        <div className="flexbox">
          <div className="hero_copy">
            <span>
              <div className="title">
                <motion.h1 variants={titleAnimation}>
                  <div className="firstname">Ammar</div>
                  <div className="secondname">Akram</div>
                </motion.h1>
                <motion.div variants={titleAnimation}>
                  <span className="full-stack">Full Stack Developer</span>
                </motion.div>
              </div>
              <motion.p variants={titleAnimation}>
                I design and build websites for businesses around the globe. If
                you need a modern and powerful website, send me an email.
              </motion.p>
            </span>
          </div>
          <div className="image">
            <motion.img
              variants={photoAnimation}
              src={home1}
              alt="Ammar Akram"
              className="main-image"
            />
          </div>
        </div>
        <div className="scroll-block">
          <div className="scroll-arrow"></div>
          <div className="scroll-text">scroll</div>
        </div>
      </div>
    </About>
  );
};

export const About = styled(motion.div)`
  position: relative;

  .scroll-block {
    margin-right: 40px;
    -webkit-text-size-adjust: 100%;
    color: #000;
    font-size: 14px;
    line-height: 180%;
    text-align: right;
    box-sizing: border-box;
    position: absolute;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: inline-block;
    overflow: hidden;
    width: 46px;
    height: 105px;

    @media (max-width: 1000px) {
      visibility: hidden;
    }
  }

  .scroll-arrow {
    -webkit-text-size-adjust: 100%;
    color: #000;
    font-size: 14px;
    line-height: 180%;
    text-align: right;
    box-sizing: border-box;
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    display: inline-block;
    width: 2px;
    height: 105px;
    background-color: #000;
    transform-origin: 50% 100%;
    animation-name: line;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-style: preserve-3d;
  }

  @keyframes line {
    0% {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
    30% {
      transform: translate3d(0px, 110px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
    60% {
      transform: translate3d(0px, -110px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .scroll-text {
    -webkit-text-size-adjust: 100%;
    font-family: "Mulish", sans-serif;
    color: #000;
    font-size: 14px;
    line-height: 180%;
    text-align: right;
    box-sizing: border-box;
    position: absolute;
    left: 46px;
    top: 0%;
    right: auto;
    letter-spacing: 300%;
    bottom: auto;
    display: inline-block;
    transform: perspective(0px) rotate(90deg);
    transform-origin: 0% 0%;
    font-weight: bold;
    text-transform: uppercase;
  }

  .firstname {
    @media (max-width: 768px) {
      transform: translate(5px);
    }
  }

  .flexbox {
    min-height: 470px;
    padding-top: 10px;
  }

  .hero_copy {
    max-width: 450px;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    z-index: 3000;
    @media (max-width: 768px) {
      position: static;
      transform: translateY(0);
      margin-top: 20px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
  }

  .image {
    position: absolute;
    left: 50%;
    top: 1%;
    z-index: 2000;

    transform: translateX(-23%);

    @media (max-width: 984px) {
      transform: translateX(-23%);
    }

    @media (max-width: 768px) {
      position: static;
      transform: translateX(0%);
      border: 0;
    }
  }

  .main-image {
    margin-top: 10px;
    margin-left: -15px;
    display: block;
    max-width: 545px;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .section {
    padding: 0;
  }

  h1 {
    padding-bottom: 5px;
    max-width: 400px;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  .description {
    max-width: 440px;
  }

  p {
    margin-top: 20px;
    background-color: hsla(0, 0%, 100%, 0.4);
    @media (max-width: 984px) {
    }
  }

  .full-stack {
    position: relative;
    padding: 7px 0.03125em;
    white-space: nowrap;
    font-weight: bold;
    font-size: 28px;
    width: auto;
    user-select: none;
    -moz-user-select: none;
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
