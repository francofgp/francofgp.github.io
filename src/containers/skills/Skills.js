import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills({ imagePosition = "right",
                                 imageSrc = "../../assets/images/developerActivity.svg", 
                                 lottie = codingPerson,
                                 skillsSection}) {
  const { isDark } = useContext(StyleContext);


  const renderImage = <Fade left duration={1000}>
    <div className="skills-image-div">
      {illustration.animated && lottie ? (
        <DisplayLottie animationData={lottie} />
      ) : (
        <img
          alt="Man Working"
          src={require(imageSrc)}
        ></img>
      )}
    </div>
  </Fade>

  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {(!imagePosition || imagePosition === "left") && renderImage}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill  skillsSection={skillsSection}/>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        {(imagePosition === "right") && renderImage}

      </div>
    </div>
  );
}
