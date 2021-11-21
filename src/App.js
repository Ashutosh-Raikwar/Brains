import React from "react";
import Navigation from "./components/navigation/Navigation.js";
import "./App.css";
import tachyons from "tachyons";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import Particles from "react-tsparticles";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js";

const app = new Clarifai.App({
  apiKey: "f2a1d174ef6d46aa955e02bc0116519b",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onSubmit = () => {
    console.log("ashutosh");
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b', this.state.input
      )
      .then((response) => {
        this.calculateFaceLocation(response);
      })
      .catch((err) => {
        console.log(err);
      });

      this.setState({ imageUrl: this.state.input });
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  // onSubmit = () => {
    
  // };

  calculateFaceLocation = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Particles
          options={{
            particles: {
              number: {
                value: 83,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              move: { enable: true, speed: 2 },
              links: { enable: true },
            },
          }}
          className="particles"
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
