import React from "react";
import "./Company.css";
import { motion } from "framer-motion";

const Company = ({
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  link,
  companyName,
  tasks,
}) => {
  
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
            let heading = task.split(":")[0];
            let content = task.split(":")[1];
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
            <motion.div
              animate={{ rotate: [360, 0, 360] }}
              transition={{ duration: 20, type: "ease", yoyo: Infinity }}
              className="w-secCircle"
              style={{ background: "#00d8ff" }}
            >
              {React.createElement(skill1, { color: "white", size: "4rem" })}
            </motion.div>
            <motion.div
              animate={{ rotate: [360, 0, 360] }}
              transition={{ duration: 20, type: "ease", yoyo: Infinity }}
              className="w-secCircle"
              style={{ background: "#D7492F" }}
            >
              <img src={skill2} alt="" width="500%" height="500%" />
            </motion.div>
            <motion.div
              animate={{ rotate: [360, 0, 360] }}
              transition={{ duration: 20, type: "ease", yoyo: Infinity }}
              className="w-secCircle"
              style={{ background: "#F7E04B" }}
            >
              {React.createElement(skill3, {
                color: "black",
                size: "4rem",
                style: { background: "#F7E04B" },
              })}
            </motion.div>
            <motion.div
              animate={{ rotate: [360, 0, 360] }}
              transition={{ duration: 20, type: "ease", yoyo: Infinity }}
              className="w-secCircle"
            >
              <img src={skill4} alt="" width="450%" />
            </motion.div>
            <motion.div
              animate={{ rotate: [360, 0, 360] }}
              transition={{ duration: 20, type: "ease", yoyo: Infinity }}
              className="w-secCircle"
            >
              <img src={skill5} alt="" width="500%" height="500%" />
            </motion.div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Company;
