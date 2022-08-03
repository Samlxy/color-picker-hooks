import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("orange");
  
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p className="text-header">The color is - {color}</p>
      <button className="button-style" onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button className="button-style" onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button className="button-style" onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button
        className="button-style"
        onClick={() => setColor("CornflowerBlue")}
      >
        CornflowerBlue
      </button>
    </div>
  );
}

export default App;
