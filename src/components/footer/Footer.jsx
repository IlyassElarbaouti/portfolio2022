import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
      <div className="footer">
        <span className="footer__name">ILYASS ELARBAOUTI</span>
        <FontAwesomeIcon className="footer__github"  icon={faGithubAlt}/>
      </div>
    );
}

export default Footer
