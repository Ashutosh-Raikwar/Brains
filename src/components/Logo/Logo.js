import React from "react";
import Tilt from "react-tilt";
import Ai from "./Ai.jpg";
import "./Logo.css"

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br4 shadow-4 ml3"
        options={{ max: 25 }}
        style={{ height: 300, width: 250 }}>
        <div className="Tilt-inner"> <img className="pt5 br4 image" src={Ai} alt="No Image Found"></img> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
