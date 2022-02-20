import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { About } from "./about-section";
import Toggle from "./toggle";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <div className="faq">
        <h2>
          Any <span className="purpled">Questions</span>.
        </h2>
        <span className="highlite">Frequently Asked Questions</span>

        <AnimateSharedLayout>
          <div className="questions">
            <Toggle title="How do I Start?">
              <div className="question">
                <div className="answer">
                  <p>fald skjk laf fa jkdslf jakl </p>
                  <p>
                    faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
                    faldskjklaf fa jkdslf jakl{" "}
                  </p>
                </div>
              </div>
            </Toggle>
            <Toggle title="Daily Schedule">
              <div className="question">
                <div className="answer">
                  <p>fald skjk laf fa jkdslf jakl </p>
                  <p>
                    faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
                    faldskjklaf fa jkdslf jakl{" "}
                  </p>
                </div>
              </div>
            </Toggle>
            <Toggle title="Different Payment Methods">
              <div className="question">
                <div className="answer">
                  <p>fald skjk laf fa jkdslf jakl </p>
                  <p>
                    faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
                    faldskjklaf fa jkdslf jakl{" "}
                  </p>
                </div>
              </div>
            </Toggle>
            <Toggle title="What Services do you offer">
              <div className="question">
                <div className="answer">
                  <p>fald skjk laf fa jkdslf jakl </p>
                  <p>
                    faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
                    faldskjklaf fa jkdslf jakl{" "}
                  </p>
                </div>
              </div>
            </Toggle>
          </div>
        </AnimateSharedLayout>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  cursor: pointer;
  .questions {
    margin-top: 49px;
  }
  .highlite {
    margin-bottom: 60px;
  }
  h4 {
    font-size: 36px;
    font-weight: 400;
  }
  .faq-line {
    background: black;
    height: 0.2rem;
    margin: 28px 0px;
    width: 100%;
  }
`;

export default FaqSection;
