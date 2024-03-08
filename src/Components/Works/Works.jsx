import "./Works.css";
import React, { useContext } from "react";
import Company from "./Company/Company";
import CypressLogo from "../../Assets/Images/cypress_logo.webp";
import MuiLogo from "../../Assets/Images/mui_logo.webp";
import ReactIcon from "@iconscout/react-unicons/icons/uil-react";
import JavaScriptIcon from "@iconscout/react-unicons/icons/uil-java-script";
import BootstrapLogo from "../../Assets/Images/bootstrap_logo.webp";
import CssLogo from "../../Assets/Images/css_logo.webp";
import HtmlLogo from "../../Assets/Images/html_logo.webp";
import NextJSIcon from "../../Assets/Images/nextjs_logo.webp";
import TailwindLogo from "../../Assets/Images/tailwind_logo.webp";
import JotaiLogo from "../../Assets/Images/jotai_logo.webp";
import NodeJSLogo from "../../Assets/Images/node_logo.webp";
import JavaLogo from "../../Assets/Images/java_logo.webp";
import MySqlLogo from "../../Assets/Images/mysql_logo.webp";
import ReduxLogo from "../../Assets/Images/redux_logo.webp";
import { themeContext } from "../../Context";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const companies = [
    {
      link: "https://www2.deloitte.com/us/en.html",
      companyName: "Deloitte",
      tasks: [
        "Project Leadership: Took charge of a pivotal project for one of the world's foremost hotel chains, conducting a comprehensive review of the existing codebase to identify areas for enhancement and integration.",
        "Landing Page Development: Spearheaded the development and testing of a new landing page, focusing on optimizing user experience and engagement, leading to an improved first impression for site visitors.",
        "API Integration: Utilized APIs to seamlessly integrate Google Maps into the client’s platform, enhancing functionality and user interactivity by providing location-based services.",
      ],
      skills: [
        {
          type: "image",
          component: NextJSIcon,
          props: { color: "white", size: "4rem" },
          background: "#00d8ff",
        },
        {
          type: "image",
          component: MySqlLogo,
          props: { width: "400%", height: "400%" },
        },
        {
          type: "icon",
          component: JavaScriptIcon,
          props: { color: "black", size: "4rem" },
          background: "#F7E04B",
        },
        {
          type: "image",
          component: JavaLogo,
          props: { width: "600%" },
        },
        {
          type: "image",
          component: ReduxLogo,
          props: { width: "300%", height: "300%" },
        },
      ],
    },
    {
      link: "https://www.openinapp.com/",
      companyName: "OpeninApp",
      tasks: [
        "Role Based Access Control: Contributed to the design and development of a Role-Based Access Control (RBAC) system for B2B SaaS products, managing secure access for three distinct user roles and permissions to various features.",
        "Onboarding Flow: Led the development of the complete onboarding process including login, signup, and OTP verification, which resulted in a 50% increase in signup conversion rates and a 40% reduction in drop-offs.",
        "Email Sequencing: Coordinated with the growth team to implement an email sequencing system for personalized user engagement, achieving a 10% conversion rate with over 10000+ emails sent.",
        "Payment Integration: Integrated Stripe as a payment gateway, facilitating secure transactions for premium features and subscriptions.",
      ],
      skills: [
        {
          type: "image",
          component: NextJSIcon,
          props: { color: "white", size: "4rem" },
          background: "#00d8ff",
        },
        {
          type: "image",
          component: JotaiLogo,
          props: { width: "500%", height: "500%" },
        },
        {
          type: "icon",
          component: JavaScriptIcon,
          props: { color: "black", size: "4rem" },
          background: "#F7E04B",
        },
        {
          type: "image",
          component: NodeJSLogo,
          props: { width: "600%" },
        },
        {
          type: "image",
          component: TailwindLogo,
          props: { width: "500%", height: "500%" },
        },
      ],
    },
    {
      link: "https://www.volteomaritime.com/",
      companyName: "Volteo Maritime",
      tasks: [
        "Automate Form Creation: Created an automated form creation system using JSON and JavaScript, reducing manual paperwork by 50%.",
        "Custom Signature Canvas: Developed a custom signature component utilizing ReactJS and Redux.",
        "End-to-End Testing: Conducted end-to-end testing using the Cypress framework, ensuring application reliability and performance.",
      ],
      skills: [
        {
          type: "icon",
          component: ReactIcon,
          props: { color: "white", size: "4rem" },
          background: "#00d8ff",
        },
        {
          type: "image",
          component: HtmlLogo,
          props: { width: "500%", height: "500%" },
          background: "#D7492F",
        },
        {
          type: "icon",
          component: JavaScriptIcon,
          props: { color: "black", size: "4rem" },
          background: "#F7E04B",
        },
        {
          type: "image",
          component: BootstrapLogo,
          props: { width: "450%" },
          background: "",
        },
        {
          type: "image",
          component: CypressLogo,
          props: { width: "500%", height: "500%" },
          background: "",
        },
      ],
    },
    {
      link: "https://www.digitalboxitin.com/",
      companyName: "DigitalBoxItIn",
      tasks: [
        "Landing Page Optimization: Collaborated on the design and optimization of the landing page, improving its performance score from 59% to 100%.",
        "Loading Time: Improved the loading time of the website using CDN and reducing the payload size of the webapp.",
        "Others: Worked on various Test Projects for Business.",
      ],
      skills: [
        {
          type: "icon",
          component: ReactIcon,
          props: { color: "white", size: "4rem" },
          background: "#00d8ff",
        },
        {
          type: "image",
          component: HtmlLogo,
          props: { width: "500%", height: "500%" },
          background: "#D7492F",
        },
        {
          type: "icon",
          component: JavaScriptIcon,
          props: { color: "black", size: "4rem" },
          background: "#F7E04B",
        },
        {
          type: "image",
          component: MuiLogo,
          props: { width: "450%" },
          background: "",
        },
        {
          type: "image",
          component: CssLogo,
          props: { width: "500%", height: "500%" },
          background: "",
        },
      ],
    },
  ];

  return (
    <div className="awesome w-wrapper" id="Internship">
      <span style={{ color: darkMode ? "white" : "" }}>Experiences</span>
      {companies.map((company, index) => (
        <Company
          key={index}
          link={company.link}
          companyName={company.companyName}
          tasks={company.tasks}
          skills={company.skills}
        />
      ))}
    </div>
  );
};

export default Works;
