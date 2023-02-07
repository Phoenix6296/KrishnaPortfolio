import React from "react";
import "./Experience.css";

const ach = [
  {
    text: "1",
    title1: "Years",
    title2: "Experience",
  },
  {
    text: "4",
    title1: "Completed",
    title2: "Projects",
  },
  {
    text: "2",
    title1: "Startup",
    title2: "Experience",
  },
];
const Experience = () => {
  return (
    <div className="experience" id="Experiences">
      {ach.map((item, index) => (
        <div key={index} className="achievements">
          <div className="circle">{item.text}</div>
          <span>{item.title1}</span>
          <span>{item.title2}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
