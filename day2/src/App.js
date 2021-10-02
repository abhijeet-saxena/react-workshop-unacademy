import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  const [isExpanded, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <main>
      <h1>Calculator</h1>
      <button onClick={handleClick}>
        {isExpanded ? "Show Basic" : "Show Scientific"}
      </button>
      <Display
        isExpanded={isExpanded}
        expression="1 + 2 + 3"
        result="6"
      ></Display>
      <Keypad isExpanded={isExpanded}></Keypad>
    </main>
  );
}

export default App;
