import React, { useState } from "react";
import "./music.scss";
import { Howl } from "howler";
const Music = () => {
  const bars = document.querySelectorAll(".bar");
  const music = new Howl({
    src: ["inko.mp3"],loop:true
  });
  const [playing, setPlaying] = useState(false);
  if (playing) {
    bars.forEach((bar) => bar.classList.add("playing"));
    music.play();
  } else {
    bars.forEach((bar) => bar.classList.remove("playing"));
  }
  return (
    <div onClick={() => setPlaying(!playing)} class="container">
      <div class="bars ">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  );
};

export default Music;
