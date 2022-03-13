import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../animation";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <ContactStyle
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="section">
          <Title>
            <Hide>
              <motion.h2 variants={titleAnimation}>
                Get in <span className="purpled">Touch</span>.
              </motion.h2>
            </Hide>
          </Title>
          <div>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h3>Send us a message</h3>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h3>Send an email.</h3>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h3>Social Media</h3>
              </Social>
            </Hide>
          </div>
        </div>
      </ContactStyle>
      <Footer />
    </>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 60px 90px;
`;

const Title = styled.div`
  margin-bottom: 30px;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #000;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    font-family: "Abril Fatface", serif;
    font-weight: 400;
    font-size: 24px;
    margin: 30px;
  }
`;

export default Contact;
