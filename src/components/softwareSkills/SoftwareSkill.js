import React from "react";
import "./SoftwareSkill.scss";
import { Icon } from '@iconify/react';

export default function SoftwareSkill({skillsSection}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Icon icon={skills.icon} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
