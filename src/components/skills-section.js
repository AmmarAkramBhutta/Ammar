import styled from "styled-components";
import designIcon from "../img/idea.png";


const SkillsSection = () => {
  return (
    <Skills>
      <div>
        <h2>
          What I <span className="purpled">do</span>.
        </h2>
        <div className="skills">
        <div className="skill">
          <img className="skill__logo" src={designIcon} alt='web design'/>
            <div className="skill__title"><strong>Web Design</strong></div>
            <div className="skill__description">
            I build websites in Webflow where I can create responsive, powerful and fully custom websites. Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.
            </div>
            <div className="technologies">
              <h3><b>Technologies</b>:</h3>
              <div className="technologies__bullets">
                <span className="bullet">HTML</span>
                <span className="bullet">CSS</span>
                <span className="bullet">CSS</span>
                <span className="bullet">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Skills>
  );
};

const Skills = styled.div`
  .skills {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .skill {
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .skill__logo {
    width: 100px;
  }
  .skill__title{
    font-size: 24px;
    margin: 20px 0 30px;
    color: #9b51e0;
  }
  .skill__description {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 10px;
  }
  
  .technologies__bullets {
    margin-top: 13px;
  }
  .bullet{
    margin: 7px;
    padding: 4px;
    font-weight: bold;
    font-size: 13px;
    background-color: #F9EFE7;
  }
`

export default SkillsSection;
