import React from "react";
import "./Company.css";
import { motion } from "framer-motion";

const RotatingCircle = ({ className, background, children }) => (
  <motion.div
    animate={{ rotate: [360, 0, 360] }}
    transition={{ duration: 20, type: "ease", yoyo: Infinity }}
    className={`w-secCircle ${className}`}
    style={{ background }}
  >
    {children}
  </motion.div>
);

const Company = ({ link, companyName, tasks, skills }) => {
  return (
    <div className="works" id="Internship">
      <div className="awesome internship">
        <span></span>
        <span></span>
        <span>
          COMPANY NAME :&nbsp;
          <span>
            <a href={link} target="_blank" rel="noreferrer">
              {companyName}
            </a>
          </span>
        </span>
        <ul className="w-details">
          {tasks.map((task) => {
            let [heading, content] = task.split(":");
            return (
              <li key={heading}>
                <span className="task_heading">{heading} :</span>
                <span className="task_content">{content}</span>
              </li>
            );
          })}
        </ul>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-rotating_circle">
          <motion.div
            animate={{ rotate: [0, 360, 0] }}
            transition={{ duration: 20, type: "ease", yoyo: Infinity }}
            className="w-mainCircle"
          >
            {skills.map((skill, index) => (
              <RotatingCircle
                key={index}
                className={`circle-${index + 1}`}
                background={skill.background}
              >
                {skill.type === "icon" ? (
                  React.createElement(skill.component, skill.props)
                ) : (
                  <img src={skill.component} alt="" {...skill.props} />
                )}
              </RotatingCircle>
            ))}
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Company;
