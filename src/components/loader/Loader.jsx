import React from 'react'
import './loader.scss'
const Loader = () => {
    const techs = ['REACT','REDUX','JAVASCRIPT','NEXT.JS','SASS','HAVE FUN! 🤓'];
    return (
      <div className="loader">
          <div className="test"></div>
          <div className="loader__container">
            <span className="loader__logo">💻</span>
            <ul className="loader__techs">
              {techs.map((tech) => (
                <li className="loader__tech">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
    );
}

export default Loader
