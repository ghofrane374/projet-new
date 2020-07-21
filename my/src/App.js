import React from "react";
import myBeauty from "./myBeauty.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ border: "30px solid black", maxWidth: "100vw" }}>
        <h1 className="title"> ghofrane akrout</h1> <br />
        <img src={myBeauty} />
        <img src="/fleur.jpg" />
      </div>
      <div>
        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
