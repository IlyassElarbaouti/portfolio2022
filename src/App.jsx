import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.css";
import Loader from "./components/loader/Loader";
import Social from "./components/social/Social";
import './app.scss'
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      {/* <Loader /> */}
      <Header />
      <Main />
      <Social marginTop="100px" width="30vh" size="17px" />
      <p className="app__description">
        Hello stranger! 👋, my name is ilyass and I am a frontend engineer,
        passionate
        <br />
        about digital products that help people experience everyday life, not
        endure it.
      </p>
      <Projects />
      <Contact />
      <Social marginTop="20px" width="60vh" size="35px" />
      <Footer/>
    </div>
  );
};

export default App;
