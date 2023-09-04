import "../styles/skills.css"
import { useEffect } from "react";

import htmlbild from "../assets/html2.jpg";
import cssbild from "../assets/css3.jpg";
import jsbild from "../assets/JavaScript.avif";
import reactbild from "../assets/reactjs.png";
import twbild from "../assets/tailwind-CSS.avif";

const bild = {
  html: htmlbild,
  css: cssbild,
  js: jsbild,
  react: reactbild,
  tailwind:twbild
};

const Skills = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".skills img");
    images.forEach((image) => image.classList.add("active"));
  }, []);

  return (
    <>
            <h1>Skills</h1>
      <div className="container">
        <div className="skills">
          <span>Html:</span>
          <img src={bild.html} alt="Html" />
        </div>
        <div className="skills">
          <span>Css:</span>
          <img src={bild.css} alt="Html" />
        </div>
        <div className="skills">
          <span>JS:</span>
          <img src={bild.js} alt="Html" />
        </div>
        <div className="skills">
          <span>React:</span>
          <img src={bild.react} alt="Html" />
        </div>
        <div className="skills">
          <span>Tailwind:</span>
          <img src={bild.tailwind} alt="Html" />
        </div>
      </div>
    </>
  );
};

export default Skills;
