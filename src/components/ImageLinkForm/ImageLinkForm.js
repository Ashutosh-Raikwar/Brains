import React from "react";
import "./ImageLinkForm";


const ImageLinkForm = () =>{
    return(
        <div>
            <p className="f3 b">
                FaceAI can detect faces in your pictures. Try Now!!!
            </p>
            <div className="alignCenter"> 
                <div className="form">
                    <input type="text" className="w-70 pa2 center" placeholder="Enter Image URL" />
                    <button className="w-30 pointer grow f4 ph3 pv2 white bg-light-purple">Detect</button>
                </div>
            </div>
            
        </div>
    )
}

export default ImageLinkForm