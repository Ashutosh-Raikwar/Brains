import React from "react";
import Navigation from "./components/navigation/Navigation.js";
import "./App.css";
import tachyons from "tachyons";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import Particles from 'react-particles-js';

const particlesEffect={particles: {
  number:{
    value:100,
    density:{
      enable:true,
      value_area:1000,
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
