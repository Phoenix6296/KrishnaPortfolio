import React, { useContext } from "react";
import "./Intro.css";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Vector1 from "../../img/vector1.png";
import Vector2 from "../../img/vector2.png";
import MyImage from "../../img/myimage.png";
import Thumbsup from "../../img/thumbsup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
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
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Krishna Biswakarma.",
              "an Upcoming Engineer.",
              "a Front-End Web Developer.",
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
          <a href="https://github.com/Phoenix6296">
            <Github color="var(--orange)" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/iamkrishnabiswakarma/">
            <Linkedin color="var(--orange)" size="3rem" />
          </a>
          <a href="https://twitter.com/Krishna49862681">
            <Twitter color="var(--orange)" size="3rem" />
          </a>
          <a href="https://www.instagram.com/iamkrishnabiswakarma/">
            <Instagram color="var(--orange)" size="3rem" />
          </a>
          <a href="https://www.facebook.com/I.KrishnaBishwakarma">
            <Facebook color="var(--orange)" size="3rem" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={MyImage} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesemoji}
          alt=""
          className="floating-div"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
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
