import React from "react";
import "./social.scss";
const Social = ({size,width,marginTop}) => {
  return (
    <header style={{marginTop, width}} className="social">
      <ul style={{fontSize:size}} className="social__list">
        <li className="social__link">
          <a
            href="https://github.com/IlyassElarbaouti"
            rel="noreferrer"
            target="_blank"
          >
            👾 GH
          </a>
        </li>
        <li className="social__link">
          <a
            href="https://www.linkedin.com/in/ilyass-el-arbaouti-75b335201/"
            rel="noreferrer"
            target="_blank"
          >
            💼 LD
          </a>
        </li>
        <li className="social__link">
          <a
            href="https://resume.io/r/hSEtQadcp"
            rel="noreferrer"
            target="_blank"
          >
            📄 CV
          </a>
        </li>
        <li className="social__link">
          <a
            href="https://www.instagram.com/i.fixer/"
            rel="noreferrer"
            target="_blank"
          >
            🏖 IG
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Social;
