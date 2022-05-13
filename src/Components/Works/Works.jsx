import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import ReactJS from "@iconscout/react-unicons/icons/uil-react";
import HTML from "@iconscout/react-unicons/icons/uil-html5";
import JS from "@iconscout/react-unicons/icons/uil-java-script";
import CSS from "@iconscout/react-unicons/icons/uil-css3-simple";
import Firebase from "../../img/firebase.png";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Internship">
      <div className="awesome internship">
        <span style={{ color: darkMode ? "white" : "" }}>Internship</span>
        <span>Experience</span>
        <span>
          Company Name - <span>DigitalBoxItIn</span>
        </span>
        <ul className="w-details">
          <li>Responsible for handling the Front-End of the Wesbite.</li>
          <br />
          <li>Tech Stack used HTML, CSS, JS, ReactJS.</li>
          <br />
          <li>Framework used Bootstrap and MaterialUI.</li>
          <br />
          <li>Learnt to Work in a Team.</li>
          <br />
          <li>Learnt Time Management.</li>
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
            <ReactJS color="white" size="3rem" />
          </div>
          <div className="w-secCircle">
            <HTML color="black" size="3rem" style={{ background: "#D7492F" }} />
          </div>
          <div className="w-secCircle" style={{ background: "#F7E04B" }}>
            <JS color="black" size="3rem" />
          </div>
          <div className="w-secCircle" style={{ background: "#2D394A" }}>
            <img src={Firebase} alt="" />
          </div>
          <div className="w-secCircle" style={{ background: "#264BDD" }}>
            <CSS color="black" size="3rem" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
