import React from "react";
import "./Footer.css";
import Wave from "../../Assets/Images/wave_bg.webp";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Top from "@iconscout/react-unicons/icons/uil-arrow-circle-up";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>krishnabiswakarmsc@gmail.com</span>
        {/* <span>+91-6296579878</span> */}
        <div className="f-icons">
          <a
            href="https://github.com/Phoenix6296"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/iamkrishnabiswakarma/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/krishnaa_kanha/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram color="white" size="3rem" />
          </a>
          <a
            href="https://twitter.com/Krishna49862681"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter color="white" size="3rem" />
          </a>
          <a
            href="https://www.facebook.com/I.KrishnaBishwakarma"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook color="white" size="3rem" />
          </a>
        </div>
        <Link spy={true} to="Navbar" smooth={true} id="top-arrow">
          <Top color="white" size="3rem" />
        </Link>
        <span>
          Made with <span id="red-heart">&hearts;</span> by Krishna Biswakarma
        </span>
      </div>
    </div>
  );
};
export default Footer;
