import "./styles.scss";
import React from "react";
import { skills } from "../../constants";

const Skillsd = () => {
  return (
    <section className="skills">
      <div className="skills_block">
        {skills.map((skill) => (
          <div className="card">
            <div className="percent" style={skill.style}>
              <div className="dot" style={skill.style}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  {skill.num}
                  <span>%</span>
                </h2>
                <p>{skill.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillsd;
