import React from "react";
import Tilt from "react-tilt";
import Ai from "./Ai.png";
import "./Logo.css"

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br4 shadow-4 ml3"
        options={{ max: 35 }}
        style={{ height: 200, width: 200 }}>
        <div className="Tilt-inner"> <img className=" image" src={Ai} alt="No Image Found" /> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
