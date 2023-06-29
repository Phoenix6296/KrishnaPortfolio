import "./Works.css";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Company from "./Company/Company";
import CypressLogo from "../../Assets/Images/cypress_logo.webp";
import MuiLogo from "../../Assets/Images/mui_logo.webp";
import ReactIcon from "@iconscout/react-unicons/icons/uil-react";
import JavaScriptIcon from "@iconscout/react-unicons/icons/uil-java-script";
import BootstrapLogo from "../../Assets/Images/bootstrap_logo.webp";
import CssLogo from "../../Assets/Images/css_logo.webp";
import HtmlLogo from "../../Assets/Images/html_logo.webp";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const companies = [
    {
      link: "https://www.openinapp.com/",
      companyName: "OpeninApp",
      tasks: [
        "Role Based Access Control: Contributed to the design and development of a Role-Based Access Control (RBAC) system for B2B SaaS products, managing secure access for three distinct user roles and permissions to various features.",
        "Onboarding Flow: Led the development of the complete onboarding process including login, signup, and OTP verification, which resulted in a 50% increase in signup conversion rates and a 40% reduction in drop-offs.",
        "Email Sequencing: Coordinated with the growth team to implement an email sequencing system for personalized user engagement, achieving a 10% conversion rate with over 10000+ emails sent.",
        "Payment Integration: Integrated Stripe as a payment gateway, facilitating secure transactions for premium features and subscriptions.",
      ],
      skill1: ReactIcon,
      skill2: HtmlLogo,
      skill3: JavaScriptIcon,
      skill4: MuiLogo,
      skill5: CypressLogo,
    },
    {
      link: "https://www.volteomaritime.com/",
      companyName: "Volteo Maritime",
      tasks: [
        "Automate Form Creation: Created an automated form creation system using JSON and JavaScript, reducing manual paperwork by 50%.",
        "Custom Signature Canvas: Developed a custom signature component utilizing ReactJS and Redux.",
        "End-to-End Testing: Conducted end-to-end testing using the Cypress framework, ensuring application reliability and performance.",
      ],
      skill1: ReactIcon,
      skill2: HtmlLogo,
      skill3: JavaScriptIcon,
      skill4: MuiLogo,
      skill5: CypressLogo,
    },
    {
      link: "https://www.digitalboxitin.com/",
      companyName: "DigitalBoxItIn",
      tasks: [
        "Landing Page Optimization: Collaborated on the design and optimization of the landing page, improving its performance score from 59% to 100%.",
        "Loading Time: Improved the loading time of the website using CDN and reducing the payload size of the webapp.",
        "Others: Worked on various Test Projects for Business.",
      ],
      skill1: ReactIcon,
      skill2: HtmlLogo,
      skill3: JavaScriptIcon,
      skill4: BootstrapLogo,
      skill5: CssLogo,
    },
  ];

  return (
    <div className="awesome w-wrapper" id="Internship">
      <span style={{ color: darkMode ? "white" : "" }}>Internship</span>
      <span>Experience</span>
      {companies.map((company, index) => (
        <Company
          key={index}
          link={company.link}
          companyName={company.companyName}
          tasks={company.tasks}
          skill1={company.skill1}
          skill2={company.skill2}
          skill3={company.skill3}
          skill4={company.skill4}
          skill5={company.skill5}
        />
      ))}
    </div>
  );
};

export default Works;
