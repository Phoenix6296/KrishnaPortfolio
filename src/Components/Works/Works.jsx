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
    <div className="awesome w-wrapper">
      <span style={{ color: darkMode ? "white" : "" }}>Internship</span>
      <span>Experience</span>
      <Company
        link="https://www.volteomaritime.com/"
        cName="Volteo Maritime"
        list1="Presently Working"
        list2="Tech Stack used HTML, CSS, JS, Typescript, ReactJS"
        list3="Framework used Tailwind CSS."
        list4="Working with brilliant team."
        list5="More things to be explored..."
        skill1={ReactJS}
        skill2={HTML}
        skill3={JS}
        skill4={Tailwind}
        skill5={TS}
      />
      <Company
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
      />
    </div>
  );
};

export default Works;
