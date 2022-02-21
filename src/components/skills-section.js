import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import skillApi from "../skill-api";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="section" id="whatido">
        <h2>
          What I <span className="purpled">do</span>.
        </h2>
        <div className="skills">
          {skillApi.map((skill) => {
            return (
              <div className="skill" key={skill.id}>
                <img
                  className="skill__logo"
                  src={skill.image}
                  alt="web design"
                />
                <div className="skill__title">
                  <strong>{skill.name}</strong>
                </div>
                <div className="skill__description">{skill.description}</div>
                <div className="technologies">
                  <h3>
                    <b>Technologies</b>:
                  </h3>
                  <div className="technologies__bullets">
                    {skill.tags.map((tag) => (
                      <span className="bullet" key={Math.random()}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Skills>
  );
};

const Skills = styled.div`
  .section {
    margin-top: 130px;
  }
  .skills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skill {
    margin: 40px 20px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .skill__logo {
    width: 100px;
  }
  .skill__title {
    font-size: 24px;
    margin: 20px 0 30px;
    color: #9b51e0;
  }
  .skill__description {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 10px;
  }

  .technologies {
    margin: 10px;
    h3 {
      margin-bottom: 20px;
    }
  }
`;

export default SkillsSection;
