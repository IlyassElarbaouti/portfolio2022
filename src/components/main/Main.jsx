import React from "react";
import "./main.scss";
const Main = () => {
  return (
    <main className="main">
      <div className="main__hero">
        <div className="main__hero_heading">
          <span>turning ideas into </span>
          <br />
          <span>
            real life
            <span className="main__hero_heading-gradient"> products</span>
          </span>
          <br />
          <span>is my calling.</span>
        </div>
      </div>
      <div className="main__projects">
        <a className="main__projects_link" href="#projects">
          <span className="main__projects_link_text">VIEW PROJECTS</span>
        </a>
      </div>
    </main>
  );
};

export default Main;
