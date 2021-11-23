import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma3" style={{ position: "relative" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          style={{ width: "500px", height: "auto" }}
          className="image-border"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
