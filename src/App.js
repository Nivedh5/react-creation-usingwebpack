import React from "react";
import image from "./iconImg/ReactJS.jpeg";
import svg from "./iconImg/icon-instagram.svg";

function App() {
  return (
    <div>
      <h1>React App with Webpack and Yarn</h1>
      <img src={image} alt="Random Icon" />
      <img src={svg} alt="Img" />
    </div>
  );
}

export default App;
