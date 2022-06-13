import React from "react";
import "./Company.css";
import { motion } from "framer-motion";
// import ReactJS from "@iconscout/react-unicons/icons/uil-react";

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
        {/* <button className="button s-button">Hire Me</button> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle" style={{ background: "#00d8ff" }}>
            <Skill1 color="white" size="4rem" />
          </div>
          <div className="w-secCircle" style={{ background: "#D7492F" }}>
            <img src={Skill2} alt="" width="500%" height="500%" />
          </div>
          <div className="w-secCircle" style={{ background: "#F7E04B" }}>
            <Skill3
              color="black"
              size="4rem"
              style={{ background: "#F7E04B" }}
            />
          </div>
          <div className="w-secCircle" style={{ background: "#2D394A" }}>
            <img src={Skill4} alt="" />
          </div>
          <div className="w-secCircle" style={{ background: "#2677BD" }}>
            <img src={Skill5} alt="" width="500%" height="500%" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Company;
