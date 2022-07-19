import React, { useContext } from "react";
import "./About.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "./Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome about-left">
        <div className="a-headings">
          <span style={{ color: darkMode ? "white" : "" }}>About&nbsp;</span>
          <span>Me</span>
        </div>
        <span></span>
        <ul>
          <li>
            Pursuing Computer Science and Engineering
            <br />
            - Haldia Institute of Technology
            <br />- CGPA: 9.21
          </li>
          <br />
          <li>
            Intermediate
            <br />- S.K.S. Public School
          </li>
          <br />
          <li>
            Matriculation
            <br />- S.T. Joseph Convent High School
          </li>
          <br />
        </ul>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          transition={{ duration: 1, type: "spring" }}
          style={{ left: "14rem" }}
        >
          <Card
            image={HeartEmoji}
            heading={"Developer"}
            details={"HTML5, CSS3, JS, ReactJS, Bootstrap, Git, Github"}
          />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          transition={{ duration: 1, type: "spring" }}
          style={{ left: "-1rem", top: "12rem" }}
        >
          <Card
            image={Glasses}
            heading={"Programming"}
            details={"C++, C, Python, Java, Competitive Programming."}
          />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          transition={{ duration: 1, type: "spring" }}
          style={{ left: "14rem", top: "19rem" }}
        >
          <Card
            image={Humble}
            heading={"Backend"}
            details={"Structured Query Language, Oracle, Databases, MYSQL "}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
