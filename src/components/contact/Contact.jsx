import React from 'react'
import './contact.scss'
const Contact = () => {
    return (
      <div className="contact">
        <div className="contact__first">
          <h1 className="contact__heading">
            <span className="contact__title">Sold Yet? </span>π€
          </h1>
          <p className="contact__description">
            Thanks for stopping by, Iβm currently looking to join a new team of
            creative designers and developers. If you think we might be a good
            fit for one another, give me a
            <a href="tel:+380955-977-532">
              <span className="contact__link"> call </span>
            </a>
            πΊπ¦ or send me an
            <a href="mailto: mrfixer59@gmail.com">
              <span className="contact__link"> email </span>
            </a>
            π§.
          </p>
        </div>
        <div className="contact__second">
          <h1 className="contact__heading">
            <span className="contact__title">Let's Talk! </span>π
          </h1>
          <p className="contact__connect">Connect with me online π</p>
        </div>
      </div>
    );
}

export default Contact
