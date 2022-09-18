import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import Company from "./Company/Company";

// Company 1
import ReactJS from "@iconscout/react-unicons/icons/uil-react";
import JS from "@iconscout/react-unicons/icons/uil-java-script";
import Bootstrap from "../../img/bootstrap.png";
import CSS from "../../img/css.png";
import HTML from "../../img/html.png";

// Company 2
import Tailwind from "../../img/tailwind.png";
import TS from "../../img/ts.png";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="awesome w-wrapper" id="Internship">
      <span style={{ color: darkMode ? "white" : "" }}>Internship</span>
      <span>Experience</span>
      <Company
        link="https://www.volteomaritime.com/"
        cName="Volteo Maritime"
        list1="Tech Stack used HTML, CSS, JS, ReactJS"
        list2="Assisted Senior developers in their tasks."
        list3="Learned team coordination."
        list4="Learned to read the documentation."
        list5="Learned to figure out and fix bugs in a large codebase."
        skill1={ReactJS}
        skill2={HTML}
        skill3={JS}
        skill4={Bootstrap}
        skill5={CSS}
      />
      {/* <Company
        link="https://www.digitalboxitin.com/"
        cName="DigitalBoxItIn"
        list1="Responsible for handling the Front-End of the Wesbite."
        list2="Tech Stack used HTML, CSS, JS, ReactJS."
        list3="Framework used Bootstrap."
        list4="Learnt to Work in a Team."
        list5="Learnt Time Management."
        skill1={ReactJS}
        skill2={HTML}
        skill3={JS}
        skill4={Bootstrap}
        skill5={CSS}
      /> */}
    </div>
  );
};

export default Works;
