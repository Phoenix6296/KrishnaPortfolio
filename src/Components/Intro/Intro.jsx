import React, { useContext } from "react";
import "./Intro.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
// import Blob1 from "../../img/blueblob.png";
// import Blob2 from "../../img/yellowblob.png";
import MyImage from "../../img/myImage.png";
import Thumbsup from "../../img/thumbsup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesemoji.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I am </span>
          <TypeWriterEffect
            textStyle={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
            cursorColor="#3F3D56"
            multiText={[
              "Krishna Biswakarma.",
              "an Upcoming Engineer.",
              "a Web Developer.",
              "Krishna Biswakarma.",
            ]}
            nextTextDelay={2000}
            typeSpeed={120}
          />
          <span>
            Eager to learn and implement new technologies and methodologies.
            Always willing to innovate new things which can improve the existing
            technology.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Contact Me</button>
        </Link>

        <div className="i-icons">
          <a
            href="https://github.com/Phoenix6296"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="var(--orange)" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/iamkrishnabiswakarma/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="var(--orange)" size="3rem" />
          </a>
          <a
            href="https://twitter.com/Krishna49862681"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter color="var(--orange)" size="3rem" />
          </a>
        </div>
      </div>

      <div className="i-right">
        {/* <img src={Blob1} alt="" id="blob1" />
        <img src={Blob2} alt="" id="blob2" /> */}
        <img src={MyImage} alt="" />
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesemoji}
          alt=""
          className="floating-div"
        />
        <motion.div
          initial={{ top: "-20%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "62%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv
            image={Thumbsup}
            text1="Programming"
            text2="Enthusiast"
          />
        </motion.div>

        {/* Divs Required for Blurring */}
        <div
          className="blur"
          style={{ background: "rgb(238, 210, 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
