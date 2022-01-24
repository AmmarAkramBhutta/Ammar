import styled from "styled-components";
import { About } from "./about-section";

const FaqSection = () => {
  return (
    <Faq>
      <div className="faq">
        <h2>
          Any <span className="purpled">Questions</span>.
        </h2>
        <h3>Frequently Asked Questions</h3>
        <div className="question">
          <h4>How do I Start?</h4>
          <div className="answer">
            <p>fald skjk laf fa jkdslf jakl </p>
            <p>
              faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
              faldskjklaf fa jkdslf jakl{" "}
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>fald skjk laf fa jkdslf jakl </p>
            <p>
              faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
              faldskjklaf fa jkdslf jakl{" "}
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>fald skjk laf fa jkdslf jakl </p>
            <p>
              faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
              faldskjklaf fa jkdslf jakl{" "}
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What Services do you offer</h4>
          <div className="answer">
            <p>fald skjk laf fa jkdslf jakl </p>
            <p>
              faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
              faldskjklaf fa jkdslf jakl{" "}
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h4 {
    font-size: 36px;
    font-weight: 400;
  }
  .faq-line {
    background: black;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
