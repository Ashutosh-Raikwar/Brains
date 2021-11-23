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
      box: {},
    };
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log("face", clarifaiFace);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    let mainData = {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
    console.log(mainData);
    return mainData;
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log("clicked");
    
    app.models
      .predict('a403429f2ddf4b49b307e318f00e528b', this.state.input)
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((err) => console.log(err));
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
        <ImageLinkForm
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    );
  }
}

export default App;
