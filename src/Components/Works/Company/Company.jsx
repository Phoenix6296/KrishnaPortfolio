import React from "react";
import "./Company.css";
import { motion } from "framer-motion";

const Company = (props) => {
  const Skill1 = props.skill1;
  const Skill2 = props.skill2;
  const Skill3 = props.skill3;
  const Skill4 = props.skill4;
  const Skill5 = props.skill5;
  return (
    <div className="works" id="Internship">
      <div className="awesome internship">
        {/* <span style={{ color: darkMode ? "white" : "" }}>Internship</span>
        <span>Experience</span> */}
        <span></span>
        <span></span>
        <span>
          COMPANY NAME -{" "}
          <span>
            <a href={props.link} target="_blank" rel="noreferrer">
              {props.cName}
            </a>
          </span>
        </span>
        <ul className="w-details">
          <li>{props.list1}</li>
          <br />
          <li>{props.list2}</li>
          <br />
          <li>{props.list3}</li>
          <br />
          <li>{props.list4}</li>
          <br />
          <li>{props.list5}</li>
        </ul>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          //Keep rotating the div around the Y-axis in same direction forever
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
            <Skill1 color="white" size="4rem" />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0, 360] }}
            transition={{ duration: 20, type: "ease", yoyo: Infinity }}
            className="w-secCircle"
            style={{ background: "#D7492F" }}
          >
            <img src={Skill2} alt="" width="500%" height="500%" />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0, 360] }}
            transition={{ duration: 20, type: "ease", yoyo: Infinity }}
            className="w-secCircle"
            style={{ background: "#F7E04B" }}
          >
            <Skill3
              color="black"
              size="4rem"
              style={{ background: "#F7E04B" }}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0, 360] }}
            transition={{ duration: 20, type: "ease", yoyo: Infinity }}
            className="w-secCircle"
            style={{ background: "#2D394A" }}
          >
            <img src={Skill4} alt="" />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0, 360] }}
            transition={{ duration: 20, type: "ease", yoyo: Infinity }}
            className="w-secCircle"
            style={{ background: "#2677BD" }}
          >
            <img src={Skill5} alt="" width="500%" height="500%" />
          </motion.div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Company;
