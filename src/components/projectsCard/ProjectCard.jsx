import React from "react";
import "./projectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectCard = ({project}) => {
  const {name,techs,github,link} = project

  return (
    <div className="projectCard">
      <div className="projectCard__left">
        <h4 className="projectCard__left_tech">{techs}</h4>
      </div>
      <div className="projectCard__middle">
        <div
          style={{
            backgroundImage: `url(https://d33wubrfki0l68.cloudfront.net/61978410b877af0007db4663/screenshot_2021-11-19-11-02-05-0000.png)`,
          }}
          className="projectCard__middle_container"
        ></div>
      </div>
      <div className="projectCard__right">
        <h1 className="projectCard__right_title">{name}</h1>
        <a target='_blank' href={link} className="projectCard__right_link" rel="noreferrer">
          VISIT THE WEBSITE
        </a>
        <a target='_blank' href={github} className="projectCard__right_github" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
