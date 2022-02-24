import { AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { About } from "./about-section";
import Toggle from "./toggle";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <div className="section">
      <Faq
        // variants={scrollReveal}
        ref={element}
        // animate={controls}
        // initial="hidden"
      >
        <div className="faq">
          <h2>
            Any <span className="purpled">Questions</span>.
          </h2>
          <div className="highlite">Frequently Asked Questions</div>

          <AnimateSharedLayout>
            <div className="questions">
              <Toggle title="How do I Start?">
                <div className="question">
                  <div className="answer">
                    <p>
                      If you want any website related work,{" "}
                      <Link to="/contact">send me an email</Link> and I'll
                      respond as soon as possible.
                    </p>
                  </div>
                </div>
              </Toggle>
              <Toggle title="Daily Schedule">
                <div className="question">
                  <div className="answer">
                    <p>
                      Timetable for work is not fixed. It changes as per work
                      requirements.
                    </p>
                  </div>
                </div>
              </Toggle>
              {/* <Toggle title="Different Payment Methods">
                <div className="question">
                  <div className="answer">
                    <p>
                      faldsk jklaf fa jkdslf jaklfa ldsk jklaf fa jkdslf jakl
                      faldskjklaf fa jkdslf jakl
                    </p>
                  </div>
                </div>
              </Toggle> */}
              <Toggle title="What Services do you offer?">
                <div className="question">
                  <div className="answer">
                    <p>
                      The skillset includes website prototype design, frontend
                      development, backend development, full stack development
                      and CMS development. Details are given in&nbsp;
                      <a alt="redir" href="#whatido">
                        my skills section
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </Toggle>
            </div>
          </AnimateSharedLayout>
        </div>
      </Faq>
    </div>
  );
};

const Faq = styled(About)`
  display: block;
  .questions {
    cursor: pointer;
  }
  .highlite {
    margin-bottom: 60px;
  }
  h4 {
    margin-top: 42px;
    font-size: 32px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-top: 28px;
    }
  }
  .faq-line {
    background: black;
    height: 3px;
    margin: 18px 0px;
    width: 100%;
  }
`;

export default FaqSection;
