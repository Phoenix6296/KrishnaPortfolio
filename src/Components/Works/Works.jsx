import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import Company from "./Company/Company";
import Cypress from '../../Assets/Images/cypress_logo.webp'
import MUI from '../../Assets/Images/mui_logo.webp'
import ReactJS from "@iconscout/react-unicons/icons/uil-react";
import JS from "@iconscout/react-unicons/icons/uil-java-script";
import Bootstrap from "../../Assets/Images/bootstrap_logo.webp";
import CSS from "../../Assets/Images/css_logo.webp";
import HTML from "../../Assets/Images/html_logo.webp";

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
        list1="Automated the task by creating the template for the client's wayship using JSON and JS."
        list2="Created the custom signature canvas component using ReactJS."
        list3="Wrote routine unit test for the templates in Cypress."
        list4="Tech Stack used: HTML, CSS Modules, JS, ReactJS, Material UI, Cypress."
        skill1={ReactJS}
        skill2={HTML}
        skill3={JS}
        skill4={MUI}
        skill5={Cypress}
      />
      <Company
        link="https://www.digitalboxitin.com/"
        cName="DigitalBoxItIn"
        list1="Worked on creating the Company's Home Page using ReactJS and Material UI."
        list2="Improved the loading time of the website."
        list3="Worked on various Test Projects for Businesses."
        list4="Tech Stack: HTML, CSS, JS, ReactJS, MaterialUI, and Bootstrap."
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
