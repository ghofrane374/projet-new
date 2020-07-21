import React from "react";
import "./App.css";
import myBeauty from "./myBeauty.jpg";

function App() {
  return (
    <div>
      <div style={{ border: "30px solid black", maxWidth: "100vw" }}>
        <h1 className="title"> ghofrane akrout</h1> <br />
        <image src={myBeauty} />
      </div>
    </div>
  );
}

export default App;
