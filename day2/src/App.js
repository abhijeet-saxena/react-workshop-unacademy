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
    <div class="container">
      <button onClick={handleClick}>
        Show {isExpanded ? "Basic" : "Scientific"}
      </button>
      <main class={isExpanded ? "expanded" : ""}>
        <Display expression="1 + 2 + 3" result="6"></Display>
        <Keypad></Keypad>
      </main>
    </div>
  );
}

export default App;
