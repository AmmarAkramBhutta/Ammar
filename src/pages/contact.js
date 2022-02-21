import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../animation";

const Contact = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="section">
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>Get in Touch</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle />
              <h2>Send us a message</h2>
            </Social>
          </Hide>{" "}
          <Hide>
            <Social variants={titleAnimation}>
              <Circle />
              <h2>Send an email.</h2>
            </Social>
          </Hide>{" "}
          <Hide>
            <Social variants={titleAnimation}>
              <Circle />
              <h2>Social Media</h2>
            </Social>
          </Hide>
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #000;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default Contact;
