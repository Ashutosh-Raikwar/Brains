import React from "react";
import Navigation from "./components/navigation/Navigation.js";
import "./App.css";
import tachyons from "tachyons";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import Particles from 'react-particles-js';

const particlesEffect={particles: {
  line_linked: {
    shadow: {
      enable: true,
      color: "#FFFF",
      blur: 5
    }
  }
}
}

function App() {
  return(
    <div className="App">
      <Particles params={particlesEffect} className="particles"/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  )
}

export default App;
